import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppTitleStore = defineStore('appTitle', () => {
  const appTitle = ref<string>('')

  return { appTitle }
})
