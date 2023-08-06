<script setup lang="ts">
import ExampleComponent from '@/components/shared/ExampleComponent.vue'
</script>
<template>
  <div class="container">
    <h3>About page</h3>

    <p>This application is a template for quickly building front-end</p>
    <ExampleComponent class="py-4" style="border: 0.1em dotted red" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
