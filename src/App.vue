<script setup lang="ts">
import { RouterView } from 'vue-router'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('meta[name="theme-color"]')!.setAttribute('content', '#202020');
}

</script>

<template>
  <main class="center">
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: block !important;
  max-width: 750px;
  width: calc(90% - 160px);
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  padding-left: 160px;
}

main.center {
  max-width: 650px;
  width: 80%;
  padding-left: 0;
}
</style>
