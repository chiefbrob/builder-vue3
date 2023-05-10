<script lang="ts" setup>
import { ref } from 'vue'

function onTabPress(e: Event) {
  let t = e.target

  let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd

  t.value = val.substring(0, start) + '  ' + val.substring(end)

  t.selectionEnd = start + 2
}
</script>

<template>
  <textarea
    name=""
    id=""
    @keydown.tab.prevent="onTabPress"
    placeholder="type me"
    cols="30"
    rows="10"
  >
Hi there</textarea
  >
</template>
