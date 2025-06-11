import {defineStore} from 'pinia'

export const useBurnoutPreventionSettingsStore = defineStore('burnout-prevention', {
  state: () => ({
    enabled: true,
    radios: 10,
    cycleTime: 10
  }),
  persist: piniaPluginPersistedstate.cookies({
    maxAge: 365 * 24 * 60 * 60,
  }),
})
