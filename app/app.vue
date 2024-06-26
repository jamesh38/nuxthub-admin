<template>
  <div style="max-width: 1024px; margin: auto" class="h-screen">
    <AppMenuBar class="mb-3" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "NuxtHub Starter",
  description:
    "A Nuxt template to build your full-stack application on the edge.",
});
</script>

<style>
@import url("primevue/resources/themes/aura-light-green/theme.css");
@import url("primeicons/primeicons.css");
@import url("primeflex/primeflex.css");
</style>
