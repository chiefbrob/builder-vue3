<script lang="ts" setup>
defineProps({
  modelValue: String
})

let emit = defineEmits(['update:modelValue'])

function onTabPress(e: any) {
  let t = e.target

  let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd

  t.value = val.substring(0, start) + '  ' + val.substring(end)

  t.selectionEnd = start + 2
}

function update(e: any) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <textarea
    name=""
    id=""
    @keydown.tab.prevent="onTabPress"
    @keyup="update"
    placeholder="type me"
    v-text="modelValue"
  />
</template>
