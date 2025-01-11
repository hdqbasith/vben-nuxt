import { DEFAULT_HOME_PATH, LOGIN_PATH } from "~/packages/constants";
import { generateAccess } from "~/packages/router/access";
import { accessRoutes, coreRouteNames } from "~/packages/router/routes";
import { useAccessStore, useUserStore } from "~/packages/stores";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    
    const nuxtApp = useNuxtApp();
    const accessStore = useAccessStore();
    // Cek token
    // Tidak ada token tapi boleh diakses
    if (!accessStore.accessToken||to.meta.ignoreAccess) {
        to.path = LOGIN_PATH;
        to.query = { redirect: encodeURIComponent(to.fullPath) };
    }
    
    return nuxtApp.runWithContext(() => {
        navigateTo(to)
    });
});
