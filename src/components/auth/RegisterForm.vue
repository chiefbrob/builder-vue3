<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/scripts'
import TextInput from '../shared/form/TextInput.vue'

const email = ref('')
const name = ref('')
const password = ref('')

const login = async () => {
  const formData = new FormData()
  formData.append('email', email.value)
  formData.append('name', name.value)
  formData.append('password', password.value)
  formData.append('password_confirmation', password.value)

  await window.axios
    .post('/v2/register', formData)
    .then((result: any) => {
      localStorage.setItem('token', result.data.access_token)
      console.log(result)
      toast('Registration Success')
    })
    .catch((err: any) => {
      console.log(err)
    })
}
</script>

<template>
  <form action="POST" @submit.prevent="login" class="row">
    <text-input class="col-md-7 py-2" type="text" :required="true" @update="name = $event"
      >Name</text-input
    >
    <text-input class="col-md-7 py-2" type="email" :required="true" @update="email = $event"
      >Email</text-input
    >
    <text-input class="col-md-7 py-2" type="password" :required="true" @update="password = $event"
      >Password</text-input
    >
    <div class="col-md-6 py-2">
      <input type="submit" class="btn btn-sm btn-primary" value="Register" />
    </div>
  </form>
</template>
