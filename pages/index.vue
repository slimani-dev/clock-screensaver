<script setup lang="ts">
import {useSidebar} from "~/components/ui/sidebar";
import moment from "moment";
import {cn} from "~/lib/utils";

const seconds = ref('');
const minutes = ref('');
const hours = ref('');
const currentDate = ref('')

const {open} = useSidebar()


let timerId: ReturnType<typeof setInterval>;

const clockStore = useClockSettingsStore()
const dateStore = useDateSettingsStore()
const burnoutPreventionSettingsStore = useBurnoutPreventionSettingsStore()

const clockFont = computed(() => clockStore.font)
const hoursFontSize = computed(() => clockStore.hoursFontSize)
const minutesFontSize = computed(() => clockStore.minutesFontSize)
const minutesDotsFontSize = computed(() => clockStore.minutesDotsFontSize)
const minutesDotsMargin = computed(() => clockStore.minutesDotsMargin)
const secondsFontSize = computed(() => clockStore.secondsFontSize)
const secondsLeftPadding = computed(() => clockStore.secondsLeftPadding)
const secondsWidth = computed(() => clockStore.secondsWidth)
const dummyData = computed(() => clockStore.dummyData)

const dateFont = computed(() => dateStore.font)
const dateFontSize = computed(() => dateStore.fontSize)
const dateTopMargin = computed(() => dateStore.topMargin)

const burnoutPreventionEnabled = computed(() => burnoutPreventionSettingsStore.enabled)
const burnoutPreventionRadios = computed(() => burnoutPreventionSettingsStore.radios)
const burnoutPreventionCycleTime = computed(() => burnoutPreventionSettingsStore.cycleTime)

const right = ref(0)
const top = ref(0)
const left = ref(0)
const bottom = ref(0)

const style = computed(() => ({
  right: `calc(var(--spacing) * ${right.value})`,
  top: `calc(var(--spacing) * ${top.value})`,
  left: `calc(var(--spacing) * ${left.value})`,
  bottom: `calc(var(--spacing) * ${bottom.value})`,
}))

let intervalId: ReturnType<typeof setInterval>
const startTime: number = Date.now()

const twoPi = Math.PI * 2

function updateCircularMotion(radius: number, cycleTime: number) {
  const now = Date.now();
  const elapsed = Math.max((now - startTime) / 1000, 5) // seconds
  const angle = (elapsed / (cycleTime * 60)) * twoPi      // angle for current time

  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  left.value = x
  right.value = -x
  top.value = y
  bottom.value = -y
}

function startCircularMotion() {
  const radius = burnoutPreventionRadios.value
  const cycleTime = burnoutPreventionCycleTime.value
  updateCircularMotion(radius, cycleTime);
  return setInterval(() => {
    updateCircularMotion(radius, cycleTime);
  }, 10000)
}

watch(burnoutPreventionEnabled, (newValue) => {
  clearInterval(intervalId)

  if (newValue) {
    intervalId = startCircularMotion()
  } else {
    left.value = 0
    right.value = 0
    top.value = 0
    bottom.value = 0
  }
})

watch(burnoutPreventionRadios, () => {
  clearInterval(intervalId)
  intervalId = startCircularMotion()
})

watch(burnoutPreventionCycleTime, () => {
  clearInterval(intervalId)
  intervalId = startCircularMotion()
})

onMounted(() => {
  const updateTime = () => {
    const now = moment()
    seconds.value = now.format('ss')
    minutes.value = now.format('mm')
    hours.value = now.format('HH')
    currentDate.value = now.format('dddd, DD MMMM YYYY')
  }

  updateTime()
  timerId = setInterval(updateTime, 1000)

  if (burnoutPreventionEnabled.value) {
    intervalId = startCircularMotion()
  }

});

onUnmounted(() => {
  clearInterval(timerId);
  clearInterval(intervalId)
});


</script>

<template>
  <div
      class="absolute flex flex-col items-center min-w-screen justify-center transition-all duration-1000"
      :style="{...style}">
    <div :class="cn('font-medium',clockFont?.className)">
      <span class="leading-none" :style="{fontSize: hoursFontSize}">{{ dummyData ? 88 : hours }}</span>
      <span
          v-if="hours && minutes"
          class="leading-none"
          :style="{fontSize: minutesDotsFontSize, marginLeft: minutesDotsMargin, marginRight: minutesDotsMargin}">:</span>
      <span class="leading-none" :style="{fontSize: minutesFontSize}">{{ dummyData ? 88 : minutes }}</span>
      <span
          :class="cn(
                  'leading-none inline-block overflow-visible',
                  open ? 'border-b-2 dark:border-b-white light:border-b-black' : '',
                )"
          :style="{fontSize: secondsFontSize, paddingLeft: secondsLeftPadding, width: secondsWidth}">{{
          dummyData ? 88 : seconds
        }}</span>
    </div>
    <div :class="cn('font-medium',dateFont?.className)" :style="{ marginTop: dateTopMargin}">
      <span class="leading-none" :style="{fontSize: dateFontSize}">{{ currentDate }}</span>
    </div>
  </div>
</template>
