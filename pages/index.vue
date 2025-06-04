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
});

onUnmounted(() => {
  clearInterval(timerId);
});

const clockStore = useClockSettingsStore()
const dateStore = useDateSettingsStore()

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
</script>

<template>
  <div class="absolute right-0 top-0 bottom-0 min-w-screen flex flex-col items-center justify-center">
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
                  open ? 'border-b' : '',
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
