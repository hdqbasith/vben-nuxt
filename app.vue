<script setup lang="ts">
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Toaster } from 'vue-sonner';
import { setupI18n } from './locales';
import { defineOverridesPreferences, initPreferences } from './packages/preferences';
// import { setupI18n } from './locales';

dayjs.extend(customParseFormat);
const app = useNuxtApp().vueApp;
await setupI18n(app, { defaultLocale: 'en-US' });
const namespace = 'nidhoma';
await initPreferences({
  namespace,
  overrides: defineOverridesPreferences({
    app:{
      name:'nidhoma'
    }
  }),
});
</script>
<template>

  <!-- <NuxtLayout> -->
  <div>
    <NuxtPage />
  </div>
  <!-- </NuxtLayout> -->
  <NuxtLoadingIndicator class="!opacity-100" :throttle="0" />
  <Toaster richColors :expand="true" closeButton position="top-right" />
</template>