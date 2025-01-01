<script lang="ts" setup>
import { computed } from 'vue';
import { preferences } from '~/packages/@core/preferences';
const appName = computed(() => preferences.app.name);
const logo = computed(() => preferences.logo.source);
</script>

<template>
  <LayoutsAuthentication
    :app-name="appName"
    :logo="logo"
    :page-description="$t('authentication.pageDesc')"
    :page-title="$t('authentication.pageTitle')"
    class="pt-28"
  >
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </LayoutsAuthentication>
</template>
