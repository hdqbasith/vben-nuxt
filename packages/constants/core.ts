/**
 * @zh_CN 登录页面 url 地址
 */
export const LOGIN_PATH = '/auth/login';

/**
 * @zh_CN 默认首页地址
 */
export const DEFAULT_HOME_PATH = '/dashboard';

export interface LanguageOption {
  label: string;
  value: 'en-US' | 'id-ID';
}

/**
 * Supported languages
 */
export const SUPPORT_LANGUAGES: LanguageOption[] = [
  {
    label: 'Indonesia',
    value: 'id-ID',
  },
  {
    label: 'English',
    value: 'en-US',
  },
];
