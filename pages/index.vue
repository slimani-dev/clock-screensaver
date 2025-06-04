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

const store = useClockSettingsStore()

const fontFamily = computed(() => store.font)
const hoursFontSize = computed(() => store.hoursFontSize)
const minutesFontSize = computed(() => store.minutesFontSize)
const minutesDotsFontSize = computed(() => store.minutesDotsFontSize)
const minutesDotsMargin = computed(() => store.minutesDotsMargin)
const secondsFontSize = computed(() => store.secondsFontSize)
const secondsLeftPadding = computed(() => store.secondsLeftPadding)
const secondsWidth = computed(() => store.secondsWidth)
const dateFontSize = computed(() => store.dateFontSize)
const dateTopMargin = computed(() => store.dateTopMargin)
</script>

<template>
  <div class="absolute right-0 top-0 bottom-0 min-w-screen flex flex-col items-center justify-center">
    <div class="font-medium" :style="{fontFamily}">
      <span class="leading-none" :style="{fontSize: hoursFontSize, fontFamily}">{{ hours }}</span>
      <span
          v-if="hours && minutes"
          class="leading-none"
          :style="{fontSize: minutesDotsFontSize, marginLeft: minutesDotsMargin, marginRight: minutesDotsMargin}">:</span>
      <span class="leading-none" :style="{fontSize: minutesFontSize}">{{ minutes }}</span>
      <span
          :class="cn(
                  'leading-none inline-block overflow-visible',
                  open ? 'border-b' : '',
                )"
          :style="{fontSize: secondsFontSize, paddingLeft: secondsLeftPadding, width: secondsWidth}">{{
          seconds
        }}</span>
    </div>
    <div class="font-medium" :style="{ marginTop: dateTopMargin, fontFamily }">
      <span class="leading-0" :style="{fontSize: dateFontSize}">{{ currentDate }}</span>
    </div>
  </div>
</template>
