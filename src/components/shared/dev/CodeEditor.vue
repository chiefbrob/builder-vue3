<script lang="ts" setup>
import { ref } from 'vue'

let textarea = ref(null)

function onkeydown(e: Event) {
  let t = textarea.value

  let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd

  t.value = val.substring(0, start) + '\t' + val.substring(end)

  t.selectionStart = t.selectionStart + ' '
  e.preventDefault()
}
</script>

<template>
  <textarea
    name=""
    id=""
    ref="textarea"
    @keydown.tab="onkeydown"
    placeholder="type me"
    cols="30"
    rows="10"
  >
Hi there</textarea
  >
</template>
