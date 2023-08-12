<script setup lang="ts">
import { RouterView } from 'vue-router'
import BasicNav from './components/nav/BasicNav.vue'
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <basic-nav class="mt-3"></basic-nav>
    <RouterView class="py-4" />
  </div>
</template>

<style scoped></style>
