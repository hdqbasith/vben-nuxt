<script lang="ts" setup>
import { LOGIN_PATH } from '~/packages/constants';
import { AuthenticationQrCodeLogin } from '~/packages/effects/common-ui';

// import { AuthenticationQrCodeLogin } from '@vben/common-ui';
// import { LOGIN_PATH } from '@vben/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>

  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
