<script lang="ts" setup>
import { onMounted, ref } from 'vue'

let textarea = ref(null)

onMounted(() => {
  textarea.value.addEventListener('keydown', (e) => {
    let t = textarea.value
    if (e.keyCode === 9) {
      let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd

      t.value = val.substring(0, start) + '\t' + val.substring(end)

      t.selectionStart = t.selectionStart + ' '
      e.preventDefault()
    }
  })
})
</script>

<template>
  <textarea name="" id="" ref="textarea" placeholder="type me" cols="30" rows="10">
Hi there</textarea
  >
</template>
