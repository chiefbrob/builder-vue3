<script setup lang="ts">
import { RouterView } from 'vue-router'
import BasicNav from './components/nav/BasicNav.vue'
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <basic-nav></basic-nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
