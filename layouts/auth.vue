<script lang="ts" setup>
import { computed } from 'vue';
import { preferences } from '~/packages/@core/preferences';
const appName = computed(() => preferences.app.name);
const logo = computed(() => preferences.logo.source);
import { $t } from '~/packages/locales';
</script>

<template>
  <LayoutsAuthentication
    :app-name="appName"
    :logo="logo"
    :page-description="$t('authentication.pageDesc')"
    :page-title="$t('authentication.pageTitle')"
  >
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </LayoutsAuthentication>
</template>
