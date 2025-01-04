<script setup lang="ts">
import { i18n } from '~/packages/locales';

definePageMeta({
    hideInTab:true,
    title: 'login'
})

</script>
<template>

    <div class="flex-col-center dark:bg-background-deep bg-background relative px-6 py-10 lg:flex-initial lg:px-8">
        <AuthLogin class="enter-x mt-6 w-full sm:mx-auto md:max-w-md"></AuthLogin>
    </div>
</template>