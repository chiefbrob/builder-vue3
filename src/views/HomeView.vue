<script setup lang="ts">
import useStorage from '@/composables/storage/useStorage'
import CodeEditor from '@/components/shared/dev/CodeEditor.vue'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/useCounterStore'

let food = useStorage('food', 'salad')
let age = useStorage('age')
let comment = ref('foo bar')

let counter = useCounterStore()
</script>

<template>
  <main>
    <h4>Counter {{ counter.count }}</h4>
    <p>What is your favorite food? <input type="text" v-model="food" /></p>
    <p>How old are you? <input type="number" v-model="age" /></p>
    <form>
      <code-editor v-model="comment" cols="30" rows="10" />
    </form>
    <p>
      <button @click="counter.increment">Increment</button>
      <button>{{ counter.doubleCount }}</button>
    </p>
  </main>
</template>
