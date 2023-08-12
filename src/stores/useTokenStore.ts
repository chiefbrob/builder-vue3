import { defineStore } from 'pinia'

import useDeepStorage from '@/composables/storage/useDeepStorage'
import useStorage from '@/composables/storage/useStorage'

const user = useDeepStorage('user')
const token = useStorage('token')

export const useTokenStore = defineStore('token', {
  state: () => ({
    token: token.value,
    user: user.value,
    gmapApiKey: ''
  }),

  getters: {
    fullToken(state) {
      return state.token ? 'Bearer ' + state.token : null
    },
    userName(state) {
      if (state.user) {
        return state.user.name
      }
      return 'User'
    }
  },

  actions: {
    reset() {
      this.user = null
      this.token = ''
      user.value = null
      token.value = null
    }
  }
})
