<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import useStorage from '@/composables/storage/useStorage'

let food = useStorage('food', 'salad')
let age = useStorage('age')
</script>

<template>
  <main>
    <TheWelcome />
    <p>What is your favorite food? <input type="text" v-model="food" /></p>
    <p>How old are you? <input type="number" v-model="age" /></p>
  </main>
</template>
