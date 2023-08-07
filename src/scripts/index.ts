export async function toast(message: string, duration: number = 1500) {
  alert(message)
}

export async function loadUser(scope) {
  await scope.$api
    .get('v2/user', {
      headers: {
        Authorization: scope.store.fullToken
      }
    })
    .then((response: any) => {
      scope.store.user = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function logout(scope) {
  await scope.$api
    .get('v2/logout', {
      headers: {
        Authorization: scope.store.fullToken
      }
    })
    .then(() => {
      scope.store.reset()
      localStorage.removeItem('token')
    })
    .catch((err) => {
      console.log(err)
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
