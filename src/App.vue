<script setup lang="ts">
import { RouterView } from 'vue-router'
import BasicNav from './components/nav/BasicNav.vue'
</script>

<template>
  <div class="container p-0 m-0">
    <basic-nav class="m-0"></basic-nav>
    <RouterView class="p-0" />
  </div>
</template>

<style scoped></style>
