<script setup>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Toaster } from 'vue-sonner';
// import { ElConfigProvider } from 'element-plus';
// import { elementLocale } from './store/locales';
// import { initComponentAdapter } from './store/adapter/component';
import { setupI18n } from './packages/locales';
import { initStores } from './packages/stores';
import { registerAccessDirective } from './packages/effects/access';
import { useElementPlusDesignTokens } from './packages/effects/hooks';
const config=useRuntimeConfig()
// const auth=useAuthStore()
dayjs.extend(customParseFormat)
// const tgl=dayjs(auth.user.updated_at).format("D MMMM YYYY")

// await initComponentAdapter();
const app=useNuxtApp().vueApp
const namespace='ndm'
await setupI18n(app, {defaultLocale:'en-US'})
await initStores(app, namespace)
registerAccessDirective(app);
useElementPlusDesignTokens();

</script>
<template>
  
  <!-- {{ JSON.stringify(auth) }}
  {{ tgl }} -->
    <NuxtLayout>
      <!-- <ElConfigProvider :locale="elementLocale"> -->

        <NuxtPage />
      <!-- </ElConfigProvider> -->
    </NuxtLayout>
    <NuxtLoadingIndicator class="!opacity-100" :throttle="0" />
    <Toaster richColors :expand="true" closeButton position="top-right"/>
</template>