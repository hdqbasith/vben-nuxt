import { DEFAULT_HOME_PATH, LOGIN_PATH } from "~/packages/constants";
import { generateAccess } from "~/packages/router/access";
import { accessRoutes, coreRouteNames } from "~/packages/router/routes";
import { useAccessStore, useUserStore } from "~/packages/stores";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const nuxtApp = useNuxtApp();
    const userStore = useUserStore();
    const accessStore = useAccessStore();
    const authStore = useAuthStore();
    
    return nuxtApp.runWithContext(async () => {
        const router = useRouter();

        // 基本路由，这些路由不需要进入权限拦截
        if (coreRouteNames.includes(to.name as string)) {
            if (to.path === LOGIN_PATH && accessStore.accessToken) {
                return decodeURIComponent(
                    (to.query?.redirect as string) ||
                    userStore.userInfo?.homePath ||
                    DEFAULT_HOME_PATH,
                );
            }
            return true;
        }

        // accessToken 检查
        if (!accessStore.accessToken) {
            // 明确声明忽略权限访问权限，则可以访问
            if (to.meta.ignoreAccess) {
                return true;
            }

            // 没有访问权限，跳转登录页面
            if (to.fullPath !== LOGIN_PATH) {
                return {
                    path: LOGIN_PATH,
                    // 如不需要，直接删除 query
                    query:
                        to.fullPath === DEFAULT_HOME_PATH
                            ? {}
                            : { redirect: encodeURIComponent(to.fullPath) },
                    // 携带当前跳转的页面，登录后重新跳转该页面
                    replace: true,
                };
            }
            return to;
        }

        // 是否已经生成过动态路由
        if (accessStore.isAccessChecked) {
            return true;
        }

        // 生成路由表
        // 当前登录用户拥有的角色标识列表
        const userInfo = userStore.userInfo || (await authStore.fetchUserInfo());
        
        const userRoles = userInfo.roles ?? [];

        // 生成菜单和路由
        const { accessibleMenus, accessibleRoutes } = await generateAccess({
            roles: userRoles,
            router,
            // 则会在菜单中显示，但是访问会被重定向到403
            routes: accessRoutes,
        });
        
        // 保存菜单信息和路由信息
        accessStore.setAccessMenus(accessibleMenus);
        accessStore.setAccessRoutes(accessibleRoutes);
        accessStore.setIsAccessChecked(true);
        const redirectPath = (from.query.redirect ??
            (to.path === DEFAULT_HOME_PATH
                ? userInfo.homePath || DEFAULT_HOME_PATH
                : to.fullPath)) as string;
        return {
            ...router.resolve(decodeURIComponent(redirectPath)),
            replace: true,
        };
    });
});
