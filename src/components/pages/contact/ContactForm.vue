<script setup lang="ts">
import { ref } from 'vue'
import TextInput from '@/components/shared/form/TextInput.vue'
import useDeepStorage from '@/composables/storage/useDeepStorage'
import axios from '@/axios'

const user = useDeepStorage('user')

const name = ref(user.value ? user.value.name : '')
const email = ref(user.value ? user.value.email : '')
const phone_number = ref(user.value ? user.value.phone_number : '')
const title = ref('')
const message = ref('')

const loading = ref(false)

const formSubmitted = async () => {
  loading.value = true

  const formData = new FormData()
  formData.append('email', email.value)
  formData.append('name', name.value)
  formData.append('phone_number', phone_number.value)
  formData.append('title', title.value)
  formData.append('message', message.value)

  await axios
    .post('/v2/contact', formData)
    .then((result: any) => {
      //
    })
    .catch((err: any) => {
      console.log(err)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>
<template>
  <form action="" class="row" method="post" @submit.prevent="formSubmitted">
    <text-input
      class="col-md-7 py-2"
      :disabled="loading"
      type="text"
      :required="true"
      :value="name"
      @update="name = $event"
      >Name</text-input
    >

    <text-input
      class="col-md-7 py-2"
      :disabled="loading"
      type="email"
      :required="true"
      :value="email"
      @update="email = $event"
      >E-mail</text-input
    >

    <text-input
      class="col-md-7 py-2"
      :disabled="loading"
      type="number"
      :required="true"
      :value="phone_number"
      @update="phone_number = $event"
      >Phone Number</text-input
    >

    <text-input
      class="col-md-7 py-2"
      :disabled="loading"
      type="text"
      :required="true"
      @update="title = $event"
      >Subject: *</text-input
    >
    <div class="col-md-7 py-2">
      <label class="" for="message">Message</label>
      <textarea class="form-control" :disabled="loading" v-model="message" rows="3"></textarea>
    </div>

    <div class="col-md-7 py-4">
      <input type="submit" class="btn btn-sm btn-primary" value="Send Message" />
    </div>
  </form>
</template>

<style></style>
