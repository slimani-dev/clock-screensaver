import {defineStore} from 'pinia'


export const useClockSettingsStore = defineStore('clock', {
  state: () => ({
    font: 'VT323',
    hoursFontSize: '25vw',
    minutesFontSize: '25vw',
    minutesDotsFontSize: '25vw',
    minutesDotsMargin: '0vw',
    secondsFontSize: '11vw',
    secondsLeftPadding: '0vw',
    secondsWidth: '15vw',
    dummyData: false,
  }),
  persist: true,
})
