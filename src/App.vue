<script setup lang="ts">
import { RouterView } from 'vue-router'
import BasicNav from './components/nav/BasicNav.vue'
</script>

<template>
  <div class="p-0 m-0">
    <basic-nav class="m-0 col-md-12"></basic-nav>
    <RouterView class="p-4" />
  </div>
</template>

<style scoped></style>
