<script setup lang="ts">
import {Slider} from '@/components/ui/slider'

import {
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const store = useClockSettingsStore()

const hoursFontSize = computed(() => Number(store.hoursFontSize.replace('vw', '')))
const minutesDotsFontSize = computed(() => Number(store.minutesDotsFontSize.replace('vw', '')))
const minutesDotsMargin = computed(() => Number(store.minutesDotsMargin.replace('vw', '')))
const minutesFontSize = computed(() => Number(store.minutesFontSize.replace('vw', '')))
const secondsFontSize = computed(() => Number(store.secondsFontSize.replace('vw', '')))
const secondsLeftPadding = computed(() => Number(store.secondsLeftPadding.replace('vw', '')))
const secondsWidth = computed(() => Number(store.secondsWidth.replace('vw', '')))
const dateFontSize = computed(() => Number(store.dateFontSize.replace('vw', '')))
const dateTopMargin = computed(() => Number(store.dateTopMargin.replace('vw', '')))

const updateHoursFontSize = (payload: number[] | undefined) => {
  if (!payload) return
  store.hoursFontSize = `${payload[0]}vw`
}

const updateMinutesFontSize = (payload: number[] | undefined) => {
  if (!payload) return
  store.minutesFontSize = `${payload[0]}vw`
}

const updateMinutesDotsFontSize = (payload: number[] | undefined) => {
  if (!payload) return
  store.minutesDotsFontSize = `${payload[0]}vw`
}

const updateMinutesDotsMargin = (payload: number[] | undefined) => {
  if (!payload) return
  store.minutesDotsMargin = `${payload[0]}vw`
}

const updateSecondsFontSize = (payload: number[] | undefined) => {
  if (!payload) return
  store.secondsFontSize = `${payload[0]}vw`
}

const updateSecondsLeftPadding = (payload: number[] | undefined) => {
  if (!payload) return
  store.secondsLeftPadding = `${payload[0]}vw`
}

const updateSecondsWidth = (payload: number[] | undefined) => {
  if (!payload) return
  store.secondsWidth = `${payload[0]}vw`
}

const updateDateFontSize = (payload: number[] | undefined) => {
  if (!payload) return
  store.dateFontSize = `${payload[0]}vw`
}

const updateDateTopMargin = (payload: number[] | undefined) => {
  if (!payload) return
  store.dateTopMargin = `${payload[0]}vw`
}
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">Hours size : {{ hoursFontSize }}</span>
        <Slider
            :model-value="[hoursFontSize]"
            :max="50"
            :min="0"
            :step="1"
            @update:model-value="updateHoursFontSize"
        />
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">minutes size : {{ minutesFontSize }}</span>
        <Slider
            :model-value="[minutesFontSize]"
            :max="50"
            :min="0"
            :step="1"
            @update:model-value="updateMinutesFontSize"
        />
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">minutes dots size : {{ minutesDotsFontSize }}</span>
        <Slider
            :model-value="[minutesDotsFontSize]"
            :max="50"
            :min="0"
            :step="1"
            @update:model-value="updateMinutesDotsFontSize"
        />
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">minutes dots margin : {{ minutesDotsMargin }}</span>
        <Slider
            :model-value="[minutesDotsMargin]"
            :max="50"
            :min="-50"
            :step="1"
            @update:model-value="updateMinutesDotsMargin"
        />
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">seconds size : {{ secondsFontSize }}</span>
        <Slider
            :model-value="[secondsFontSize]"
            :max="50"
            :min="0"
            :step="1"
            @update:model-value="updateSecondsFontSize"
        />
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div
          ref="versionButton"
          size="lg"
          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div class="flex flex-col gap-3 leading-none">
          <span class="font-semibold">seconds left padding : {{ secondsLeftPadding }}</span>
          <Slider
              :model-value="[secondsLeftPadding]"
              :max="50"
              :min="0"
              :step="1"
              @update:model-value="updateSecondsLeftPadding"
          />
        </div>
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">seconds width : {{ secondsWidth }}</span>
        <Slider
            :model-value="[secondsWidth]"
            :max="50"
            :min="0"
            :step="1"
            @update:model-value="updateSecondsWidth"
        />
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">date size : {{ dateFontSize }}</span>
        <Slider
            :model-value="[dateFontSize]"
            :max="50"
            :min="0"
            :step="1"
            @update:model-value="updateDateFontSize"
        />
      </div>
    </SidebarMenuItem>
    <SidebarMenuItem class="p-2">
      <div class="flex flex-col gap-3 leading-none">
        <span class="font-semibold">date top margin : {{ dateTopMargin }}</span>
        <Slider
            :model-value="[dateTopMargin]"
            :max="150"
            :min="-50"
            :step="1"
            @update:model-value="updateDateTopMargin"
        />
      </div>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
