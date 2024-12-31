import type { BreadcrumbStyleType } from '~/packages/@core/base/typings';

import type { Component } from 'vue';

export interface IBreadcrumb {
  icon?: Component | string;
  isHome?: boolean;
  items?: IBreadcrumb[];
  path?: string;
  title?: string;
}

export interface BreadcrumbProps {
  breadcrumbs: IBreadcrumb[];
  showIcon?: boolean;
  styleType?: BreadcrumbStyleType;
}
