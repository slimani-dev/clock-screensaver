<script setup lang="ts">
import {Slider} from '@/components/ui/slider'
import {
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {SidebarGroup, SidebarGroupContent, SidebarGroupLabel} from "~/components/ui/sidebar";
import {CollapsibleContent, CollapsibleTrigger} from "reka-ui";
import {Collapsible} from "~/components/ui/collapsible";
import {Switch} from "~/components/ui/switch";
import type {Font} from "~/types";

const store = useClockSettingsStore()

const hoursFontSize = computed(() => Number(store.hoursFontSize.replace('vw', '')))
const minutesDotsMargin = computed(() => Number(store.minutesDotsMargin.replace('vw', '')))
const secondsFontSize = computed(() => Number(store.secondsFontSize.replace('vw', '')))
const secondsLeftPadding = computed(() => Number(store.secondsLeftPadding.replace('vw', '')))
const secondsWidth = computed(() => Number(store.secondsWidth.replace('vw', '')))
const font = computed(() => store.font)

const updateHoursFontSize = (payload: number[] | undefined) => {
  if (!payload) return
  store.hoursFontSize = `${payload[0]}vw`
  store.minutesFontSize = `${payload[0]}vw`
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

const updateFont = (font: Font | undefined) => {
  if (font) store.font = font
}

</script>

<template>
  <Collapsible class="group/collapsible">
    <SidebarGroup>
      <SidebarGroupLabel as-child>
        <CollapsibleTrigger>
          <Icon name="mdi-clock" size="18px"/>
          <p class="ml-1 text-base font-semibold">Clock Settings</p>
          <Icon
              name="mdi-menu-down"
              size="20px"
              class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
        </CollapsibleTrigger>
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent class="py-2">
          <SidebarMenuItem class="p-2">
            <div class="flex flex-col gap-3 leading-none">
              <span class="font-semibold">Font : {{ font?.name }}</span>
              <FontSwitcher :model-value="font" @update:model-value="updateFont"/>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem class="p-2">
            <div class="flex flex-row items-center justify-between">
              <div class="space-y-0.5">
                <div class="text-base">
                  Dummy Data
                </div>
                <div class="text-sm text-muted-foreground">
                  88:88 <span class="text-xs">88</span>
                </div>
              </div>
              <Switch v-model="store.dummyData"/>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem class="p-2">
            <div class="flex flex-col gap-3 leading-none">
              <span class="font-semibold">Hours and minutes size : {{ hoursFontSize }}</span>
              <Slider
                  :model-value="[hoursFontSize]"
                  :max="50"
                  :min="0"
                  :step="0.5"
                  @update:model-value="updateHoursFontSize"
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
                  :step="0.5"
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
        </SidebarGroupContent>
      </CollapsibleContent>
    </SidebarGroup>
  </Collapsible>
</template>
