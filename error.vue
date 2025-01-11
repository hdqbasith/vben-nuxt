<script setup lang="ts">
import type { NuxtError } from '#app'
import { ArrowLeft } from 'lucide-vue-next';
import { VbenButton } from './packages/@core/ui-kit/shadcn-ui';
import { $t, i18n } from './packages/locales';

const props = defineProps({
  error: Object as () => NuxtError
})

const Icon404 = defineAsyncComponent(() => import('~/packages/effects/common-ui/ui/fallback/icons/icon-404.vue'));

const titleText = i18n.global.te('ui.fallback.pageNotFoundTitle') ? $t(('ui.fallback.pageNotFoundTitle')) : 'Not Found (404)';
const descText = i18n.global.te('ui.fallback.pageNotFoundDesc') ? $t('ui.fallback.pageNotFoundDesc') : 'This Page is missing';
const fallbackIcon = Icon404;

const { push } = useRouter();

// 返回首页
function back() {
  push('/dashboard');
}
</script>

<template>
  <div class="flex size-full flex-col items-center justify-center duration-300">
    <!-- <img v-if="image" :src="image" class="md:1/3 w-1/2 lg:w-1/4" /> -->
    <fallbackIcon class="md:1/3 h-1/3 w-1/2 lg:w-1/4" />
    <div class="flex-col-center">
      <slot v-if="$slots.title" name="title"></slot>
      <p v-else-if="titleText" class="text-foreground mt-8 text-2xl md:text-3xl lg:text-4xl">
        {{ error?.name +" ("+ error?.statusCode+")" }}
      </p>
      <p class="text-muted-foreground md:text-md my-4 lg:text-lg">
        {{ error?.message }}
      </p>
      <VbenButton size="lg" @click="back">
        <ArrowLeft class="mr-2 size-4" />
        {{ i18n.global.te('ui.fallback.pageNotFoundDesc') ? $t('common.backToHome') : 'Back to Dashboard' }}
      </VbenButton>
    </div>
  </div>
</template>

<!-- <Button  @click="useRouter().back()">Go back</Button> -->