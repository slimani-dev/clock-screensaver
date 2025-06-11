import {defineStore} from 'pinia'
import type {BasicColorSchema} from "@vueuse/core";

export const useThemeSettingsStore = defineStore('theme', {
  state: () => ({
    savedTheme: 'auto' as BasicColorSchema,
  }),
  persist: piniaPluginPersistedstate.cookies({
    maxAge: 365 * 24 * 60 * 60,
  }),
})
