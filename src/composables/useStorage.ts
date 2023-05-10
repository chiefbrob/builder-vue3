import { ref, watch } from 'vue'

export default function useStorage(key: string, defaultValue: any = null) {
  const storedVal = localStorage.getItem(key)

  const value = storedVal ? ref(storedVal) : ref(defaultValue)
  if (!storedVal) {
    write()
  }

  watch(value, write)
  function write() {
    if (value.value === '' || value.value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, value.value)
    }
  }
  return value
}
