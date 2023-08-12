<script setup lang="ts">
import { ref } from 'vue'
import { generateRandomString } from '@/scripts'
const props = defineProps<{
  value?: string
  required: boolean
  type: string
  disabled?: boolean
}>()
const key = ref(generateRandomString(10))
const input = ref(props.value)

let emit = defineEmits(['update'])

function update() {
  emit('update', input.value)
}
</script>

<template>
  <div>
    <label :for="key" class="form-label"><slot></slot></label>
    <input
      :type="type"
      v-model="input"
      :id="key"
      class="form-control"
      :required="required"
      @input="update"
      :disabled="disabled"
    />
    <div class="valid-feedback">Looks good!</div>
  </div>
</template>
