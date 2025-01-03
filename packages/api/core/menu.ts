// import type { RouteRecordStringComponent } from '@vben/types';

import type { RouteRecordStringComponent } from "~/packages/types";
import { requestClient } from "../request";

// import { requestClient } from '#/api/request';

/**
 * 获取用户所有菜单
 */
export async function getAllMenusApi() {
  return requestClient.get<RouteRecordStringComponent[]>('/menu/all');
}