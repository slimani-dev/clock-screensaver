import {defineStore} from 'pinia'


export const useClockSettingsStore = defineStore('digital', {
  state: () => ({
    font: 'VT323',
    hoursFontSize: '30vw',
    minutesFontSize: '30vw',
    minutesDotsFontSize: '30vw',
    minutesDotsMargin: '-10vw',
    secondsFontSize: '15vw',
    secondsLeftPadding: '20vw',
    secondsWidth: '20vw',
    dateFontSize: '6vw',
    dateTopMargin: '20vh',
    invertColors: false,
  }),
  persist: true,
})
