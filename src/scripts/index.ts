import useDeepStorage from '@/composables/storage/useDeepStorage'
import useStorage from '@/composables/storage/useStorage'
import axios from '@/axios'

const user = useDeepStorage('user')
const token = useStorage('token')

export async function toast(message: string, duration: number = 1500) {
  alert(message)
}

export async function loadUser(scope) {
  await axios
    .get('v2/user')
    .then((response: any) => {
      scope.store.user = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export default async function logout() {
  await axios
    .get('v2/logout')
    .then(() => {
      token.value = null
      user.value = null
      window.location = '/'
    })
    .catch((err: any) => {
      console.log(err)
    })
    .finally(() => {
      console.log('logout complete')
    })
}

export function generateRandomString(length: number) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let randomString = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters[randomIndex]
  }
  return randomString
}
