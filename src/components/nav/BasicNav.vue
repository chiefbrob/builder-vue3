<script setup lang="ts">
import useDeepStorage from '@/composables/storage/useDeepStorage'
import logout from '@/scripts'
const user = useDeepStorage('user')
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="$router.push({ name: 'welcome' })">Builder-vue3</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" @click="$router.push({ name: 'about' })">
            <a class="nav-link" :active="$route.name === 'about'" aria-current="page" href="#"
              >About</a
            >
          </li>
          <li class="nav-item" @click="$router.push({ name: 'home' })">
            <a class="nav-link" :active="$route.name === 'home'" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown" v-if="user === null">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul class="dropdown-menu">
              <li @click="$router.push({ name: 'login' })">
                <a class="dropdown-item" href="#">Login</a>
              </li>
              <li @click="$router.push({ name: 'register' })">
                <a class="dropdown-item" href="#">Register</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown" v-else>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ user.username }}
            </a>
            <ul class="dropdown-menu">
              <li @click="$router.push({ name: 'profile' })">
                <a class="dropdown-item" href="#">{{ user.name }}</a>
              </li>
              <li @click="$router.push({ name: 'settings' })">
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li @click="$router.push({ name: 'contacts' })">
                <a class="dropdown-item" href="#">Feedback</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li @click="logout"><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" @click="$router.push('/contact')"
              >Contact</a
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
