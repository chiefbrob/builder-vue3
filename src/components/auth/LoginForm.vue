<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/scripts'
import useDeepStorage from '@/composables/storage/useDeepStorage'
import useStorage from '@/composables/storage/useStorage'
import TextInput from '@/components/shared/form/TextInput.vue'
import { useRouter } from 'vue-router'
import axios from '@/axios'

const email = ref('')
const password = ref('')
const user = useDeepStorage('user')
const token = useStorage('token')
const router = useRouter()

const loading = ref(false)

const originalTo = useStorage('original-to-path')

const login = async () => {
  loading.value = true
  const formData = new FormData()
  formData.append('email', email.value)
  formData.append('password', password.value)

  await axios
    .post('/v2/login', formData)
    .then((result: any) => {
      token.value = result.data.access_token
      user.value = result.data.user
      password.value = ''
      email.value = ''
      router.push({ name: 'home' })
      toast('Login Success')
      if (originalTo.value) {
        window.location = originalTo.value as Location
        originalTo.value = null
      } else {
        const location = '/home' as unknown
        window.location = location as Location
      }
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
  <form action="POST" @submit.prevent="login" class="row">
    <text-input
      class="col-md-7"
      :disabled="loading"
      type="email"
      :required="true"
      @update="email = $event"
      >E-mail</text-input
    >
    <text-input
      class="col-md-7"
      :disabled="loading"
      type="password"
      :required="true"
      @update="password = $event"
      >Password</text-input
    >
    <div class="col-md-7 mt-5">
      <input type="submit" :disabled="loading" class="btn btn-sm btn-primary" value="Login" />
      <a href="#" class="btn btn-sm btn-link" @click="$router.push({ name: 'password-reset' })"
        >Reset</a
      >
      <a
        href="#"
        class="btn btn-sm btn-link"
        style="float: right"
        @click="$router.push({ name: 'register' })"
        >Register</a
      >
    </div>
  </form>
</template>
