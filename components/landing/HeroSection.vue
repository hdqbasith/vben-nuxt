<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Button } from '~/packages/@core/ui-kit/shadcn-ui';

const openMenuSheet = useState('openMenuSheet', () => false);
</script>
<template>
  <section class="container grid place-items-center gap-10 py-20 md:py-22 lg:grid-cols-2">
    <div class="space-y-6 text-center lg:text-start">
      <main class="text-5xl font-bold md:text-6xl">
        <h1 class="inline">
          <span class="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent text-xl">
            Madrasah Aliyah NU
          </span>
          <span class="block">
            Tasywiquth Thullab Salafiyah (TBS)
          </span>
        </h1>
        <h2 class="block">
          <span class="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
            Kudus
          </span>
        </h2>
      </main>

      <p class="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
        Tangguh dalam  IMTAQ, Unggul dalam IPTEK, Terdepan dalam Prestasi, dan Berwawasan Islam Ahlus Sunnah Wal Jama'ah
      </p>

      <div class="space-y-4 md:space-x-4 md:space-y-0">
        <Button as-child size="lg" to="/" @click="openMenuSheet = false" class="">
          <NuxtLink to="/"> <Icon icon="mdi:pencil" /> &nbsp;Pendaftaran / Login </NuxtLink>
        </Button>
        <Button as-child size="lg" to="/" @click="openMenuSheet = false" variant="outline">
          <NuxtLink to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/></svg> 
             &nbsp;Hubungi Admin </NuxtLink>
        </Button>
      </div>
    </div>

    <!-- {/* Hero cards sections */} -->
    <div class="z-10">
      <!-- <LandingHeroCards /> -->
      <NuxtLink to="/account/devices">Devices</NuxtLink>
    </div>
    <!-- 
    {/* bayangan effect */} -->
    <div class="bayangan"></div>
  </section>
</template>

<style>
.bayangan {
  position: absolute;
  background: hsl(var(--primary) / 0%);
  border-radius: 24px;
  rotate: 35deg;

  width: 260px;
  top: 200px;
  height: 400px;
  filter: blur(150px);
  animation: bayangan-slide infinite 4s linear alternate;
}

@keyframes bayangan-slide {
  from {
    background: hsl(var(--primary) / 20%);
    right: 460px;
  }

  to {
    background: hsl(var(--primary) / 80%);
    right: 160px;
  }
}

@media (max-width: 1024px) {
  .bayangan {
    top: 70px;
  }

  @keyframes bayangan-slide {
    from {
      background: hsl(var(--primary) / 20%);
      right: 460px;
    }

    to {
      background: hsl(var(--primary) / 50%);
      right: 160px;
    }
  }
}

@media (max-width: 768px) {
  .bayangan {
    top: 70px;
    width: 100px;
    height: 350px;
    filter: blur(60px);
  }

  @keyframes bayangan-slide {
    from {
      background: hsl(var(--primary) / 20%);
      right: 280px;
    }

    to {
      background: hsl(var(--primary) / 30%);
      right: 100px;
    }
  }
}
</style>
