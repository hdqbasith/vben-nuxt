<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '~/packages/@core/ui-kit/shadcn-ui';
import { useAccessStore } from '~/packages/stores';

const auth=useAccessStore();
type TNavLink = {
  href: string;
  label: string;
};
const navLinks: TNavLink[] = [
  {
    href: '/#features',
    label: 'Profil',
  },
  {
    href: '/#testimonials',
    label: 'Galeri',
  },
  {
    href: '/#pricing',
    label: 'Prestasi',
  },
  {
    href: '/theme',
    label: 'Theme',
  },
];

const openMenuSheet = useState('openMenuSheet', () => false);

const handleOpenMenuSheet = (state: boolean) => {
  openMenuSheet.value = state;
};
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b-[1px] bg-white/50 backdrop-blur-lg dark:border-b-slate-800/70 dark:bg-background/50 shadow-sm">
    <nav class="container flex items-center justify-between py-2">
      <ul class="flex font-bold">
        <NuxtLink to="/">
          <LandingLogoBrand class="h-12 w-24 fill-green-700"/>
        </NuxtLink>
      </ul>

      <!-- Desktop -->
      <nav class="hidden gap-2 md:flex">
        <Button as-child size="sm" variant="ghost" v-for="({ href, label }, index) in navLinks" :key="index">
          <NuxtLink :to="href"> {{ label }} </NuxtLink>
        </Button>
      </nav>
      <div class="items-center gap-2 flex flex-row-reverse md:flex-row">

        <!-- Mobile -->
        <span class="flex gap-2 md:hidden">
          <Sheet :open="openMenuSheet" @update:open="handleOpenMenuSheet">
            <SheetTrigger class="px-2" @click="openMenuSheet = true">
              <menu class="flex md:hidden">
                <Icon icon="line-md:menu-fold-left" class="h-[1.3rem] w-[1.3rem]" />
                <span class="sr-only">Menu Icon</span>
              </menu>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle class="flex justify-center text-xl font-bold">
                  <NuxtLink to="/" @click="openMenuSheet = false">
                    <LandingLogoBrand class="h-10 w-20"/>
                  </NuxtLink>
                </SheetTitle>
              </SheetHeader>
              <nav class="mt-5 flex flex-col items-center justify-center gap-2">
                <Button as-child size="sm" variant="ghost" v-for="({ href, label }, index) in navLinks" :key="index"
                  @click="openMenuSheet = false">
                  <NuxtLink :to="href"> {{ label }} </NuxtLink>
                </Button>
                <div class="">
                  <Button as-child size="sm" @click="openMenuSheet = false" to="/posts">
                    <NuxtLink to="/auth/login"> Login </NuxtLink>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </span>
        <Button v-if="!auth.accessToken" as-child size="sm" to="/posts" class="md:flex" variant="ghost">
          <NuxtLink to="/auth/register">Daftar</NuxtLink>
        </Button>
        <Button v-if="!auth.accessToken" as-child size="sm" to="/posts" class="md:flex" variant="destructive">
          <NuxtLink to="/auth/login">Login</NuxtLink>
        </Button>
        <Button v-if="auth.accessToken" as-child size="sm" to="/posts" class="md:flex" variant="destructive">
          <NuxtLink to="/dashboard">Beranda</NuxtLink>
        </Button>
        <LandingColorModeToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
