<script setup>
import {
  HomeIcon,
  ArrowsRightLeftIcon,
  Cog8ToothIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <aside
    class="fixed top-0 bottom-0 left-0 w-64 p-4 bg-zinc-800 flex flex-col space-y-8"
  >
    <ul>
      <li>
        <NuxtLink to="/">
          <img
            class="h-10"
            src="../../assets/img/logo-dark.svg"
            alt="Tradify logo"
          />
        </NuxtLink>
      </li>
    </ul>
    <ul>
      <li>
        <NuxtLink to="/" class="flex items-center space-x-4">
          <HomeIcon class="h-6 w-6" />
          <span>Hjem</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="flex items-center space-x-4">
          <ArrowsRightLeftIcon class="h-6 w-6" />
          <span>Mine handler</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="flex items-center space-x-4">
          <Cog8ToothIcon class="h-6 w-6" />
          <span>Indstillinger</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>
