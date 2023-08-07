<script setup lang="ts"></script>
<template>
  <div class="container">
    <h3 class="py-3 mt-5">404 Error</h3>

    <p>We couldn't find what you were looking for!</p>

    <p>
      <a href="#" class="btn btn-sm btn-primary" @click="$router.push({ name: 'home' })">Home</a>
    </p>
  </div>
</template>

<style></style>
