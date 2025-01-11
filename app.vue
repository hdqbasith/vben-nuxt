<script setup lang="ts">
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Toaster } from 'vue-sonner';
import { setupI18n } from './locales';
import { defineOverridesPreferences, initPreferences } from './packages/preferences';

dayjs.extend(customParseFormat);
const app = useNuxtApp().vueApp;
await setupI18n(app, { defaultLocale: 'en-US' });
const namespace = 'nidhoma';
await initPreferences({
  namespace,
  overrides: defineOverridesPreferences({
    app: {
      name: 'Nidhoma',
      accessMode:'backend'
    },
    breadcrumb:{
      showHome:true,
      styleType:'background'
    },
    copyright:{
      companyName:'HDQ Basith Studio',
      companySiteLink:'https://hdqbasith.blogspot.com',
      date:'2025',
    },
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