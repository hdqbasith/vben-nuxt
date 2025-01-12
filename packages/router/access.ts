// import type {
//   ComponentRecordType,
//   GenerateMenuAndRoutesOptions,
// } from '@vben/types';

import { BasicLayout } from "~/components/layouts/basic";
import type { ComponentRecordType, GenerateMenuAndRoutesOptions } from "../types";
import { IFrameView } from "~/components/layouts/iframe";
import { generateAccessible } from "../effects/access";
import { preferences } from "../preferences";
import { getAllMenusApi } from "../api";

// import { generateAccessible } from '@vben/access';
// import { preferences } from '@vben/preferences';

// import { ElMessage } from 'element-plus';

// import { getAllMenusApi } from '#/api';
// import { BasicLayout, IFrameView } from '#/layouts';
// import { $t } from '#/locales';

const forbiddenComponent = () => import('~/components/fallback/forbidden.vue');

async function generateAccess(options: GenerateMenuAndRoutesOptions) {
  const pageMap: ComponentRecordType = import.meta.glob('~/pages/**/*.vue');

  const layoutMap: ComponentRecordType = import.meta.glob('~/layouts/*.vue');

  return await generateAccessible(preferences.app.accessMode, {
    ...options,
    fetchMenuListAsync: async () => {
      // ElMessage({
      //   duration: 1500,
      //   message: `${$t('common.loadingMenu')}...`,
      // });
      return await getAllMenusApi();
    },
    // 可以指定没有权限跳转403页面
    forbiddenComponent,
    // 如果 route.meta.menuVisibleWithForbidden = true
    layoutMap,
    pageMap,
  });
}

export { generateAccess };
