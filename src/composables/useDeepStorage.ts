import { ref, watch } from 'vue'

export default function useDeepStorage(key: string, defaultValue: any = null) {
  let storedVal = localStorage.getItem(key)
  if (storedVal) {
    storedVal = JSON.parse(storedVal)
  }

  const value = storedVal ? ref(storedVal) : ref(defaultValue)
  if (!storedVal) {
    write()
  }

  watch(value, write, { deep: true })
  function write() {
    if (value.value === '' || value.value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value.value))
    }
  }
  return value
}
