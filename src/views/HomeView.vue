<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <main>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
    <hello-world :msg="'Builder-vue3'"></hello-world>
  </main>
</template>
