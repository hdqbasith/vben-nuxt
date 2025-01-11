<script lang="ts" setup>
import { Fallback } from '~/packages/effects/common-ui';

defineOptions({ name: 'Fallback404Demo' });
</script>

<template>
  <Fallback status="404" home-path="/dashboard"/>
</template>
