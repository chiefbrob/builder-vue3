import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import useDeepStorage from '@/composables/storage/useDeepStorage'
import useStorage from '@/composables/storage/useStorage'

export const useTokenStore = defineStore('token', () => {
  const user = useDeepStorage('user')
  const token = useStorage('token')

  function reset() {
    user.value = null
    token.value = null
  }

  function getUsername() {
    return user.value ? user.value.username : 'username'
  }

  const userProfile = computed(() => {
    return user.value ? user.value : null
  })

  const fullToken = computed(() => {
    return token.value ? `Bearer ${token.value}` : null
  })

  return {
    user,
    token,
    reset,
    getUsername,
    userProfile,
    fullToken
  }
})
