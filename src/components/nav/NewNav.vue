<script setup lang="ts">
import useDeepStorage from '@/composables/storage/useDeepStorage'
import logout from '@/scripts'
import { useRouter } from 'vue-router'
const router = useRouter()

const open = (name: string) => {
  router.push({ name: name })
}
const user = useDeepStorage('user')
</script>

<template>
  <ul>
    <li>
      <a href="#" style="background-color: red; font-size: 120%" @click="open('welcome')"
        >Builder Vue3</a
      >
    </li>
    <li><a href="#" @click="open('home')">Home</a></li>
    <li class="dropdwn">
      <a href="javascript:void(0)" class="dropbtn">Account</a>
      <div class="dropdwn-content">
        <template v-if="user">
          <a href="#" v-if="user">Profile</a>
          <a href="#" v-if="user">Log out</a>
        </template>

        <template v-else>
          <a href="#" @click="open('login')">Login</a>
          <a href="#" @click="open('register')">Register</a>
        </template>
      </div>
    </li>
    <li class="dropdwn">
      <a href="javascript:void(0)" class="dropbtn">About</a>
      <div class="dropdwn-content">
        <a href="#">About us</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Contact</a>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 0.25em 0.3em;
  text-decoration: none;
}

li a:hover,
.dropdwn:hover .dropbtn {
  background-color: red;
}

li.dropdwn {
  display: inline-block;
}

.dropdwn-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdwn-content a {
  color: black;
  padding: 0.5em 1em;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdwn-content a:hover {
  background-color: #f1f1f1;
}

.dropdwn:hover .dropdwn-content {
  display: block;
}
</style>
