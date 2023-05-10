<script setup lang="ts">
import useStorage from '@/composables/storage/useStorage'
import CodeEditor from '@/components/shared/dev/CodeEditor.vue'

let food = useStorage('food', 'salad')
let age = useStorage('age')
</script>

<template>
  <main>
    <p>What is your favorite food? <input type="text" v-model="food" /></p>
    <p>How old are you? <input type="number" v-model="age" /></p>
    <form>
      <code-editor />
    </form>
  </main>
</template>
