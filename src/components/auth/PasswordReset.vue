<script setup lang="ts">
import { ref } from 'vue'
import { toast } from '@/scripts'
import TextInput from '@/components/shared/form/TextInput.vue'

const email = ref('')

const login = async () => {
  const formData = new FormData()
  formData.append('email', email.value)

  await window.axios
    .post('/v2/login', formData)
    .then((result: any) => {
      localStorage.setItem('token', result.data.access_token)
      console.log(result)
      toast('Login Success')

      //   this.store.token = result.data.access_token;
      //   loadUser(this);
      //   this.$router.push("/");
    })
    .catch((err: any) => {
      console.log(err)
    })
}
</script>

<template>
  <form action="POST" @submit.prevent="login" class="row">
    <text-input class="col-md-7" type="email" :required="true" @update="email = $event"
      >Email</text-input
    >

    <div class="col-md-7 mt-5">
      <input type="submit" class="btn btn-sm btn-primary" value="Reset" />
      <a
        href="#"
        class="btn btn-sm btn-link"
        style="float: right"
        @click="$router.push({ name: 'login' })"
        >Login</a
      >
    </div>
  </form>
</template>
