import {defineStore} from 'pinia'


export const useDateSettingsStore = defineStore('date', {
  state: () => ({
    font: 'VT323',
    fontSize: '6vw',
    topMargin: '0vh',
  }),
  persist: true,
})
