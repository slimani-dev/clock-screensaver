import {defineStore} from 'pinia'
import {fonts} from "~/data/fonts";

export const useDateSettingsStore = defineStore('date', {
  state: () => ({
    font: fonts.find(f => f.name === 'VT323'),
    fontSize: '6vw',
    topMargin: '0vh',
    bottomMargin: '0vh',
  }),
  persist: piniaPluginPersistedstate.cookies({
    maxAge: 365 * 24 * 60 * 60,
  }),
})
