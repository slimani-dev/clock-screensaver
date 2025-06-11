<script setup lang="ts">
import {Slider} from '@/components/ui/slider'
import {SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenuItem} from "@/components/ui/sidebar";
import {CollapsibleContent, CollapsibleTrigger} from "reka-ui";
import {Collapsible} from '@/components/ui/collapsible';
import {Switch} from '@/components/ui/switch';

const store = useBurnoutPreventionSettingsStore()

const enabled = computed(() => store.enabled)
const radios = computed(() => store.radios)
const cycleTime = computed(() => store.cycleTime)

const updateEnabled = (payload: boolean | undefined) => {
  store.enabled = payload
}
const updateRadios = (payload: number[] | undefined) => {
  if (!payload) return
  store.radios = payload[0]
}

const updateCycleTime = (payload: number[] | undefined) => {
  if (!payload) return
  store.cycleTime = payload[0]
}

</script>

<template>
  <Collapsible class="group/collapsible">
    <SidebarGroup>
      <SidebarGroupLabel as-child>
        <CollapsibleTrigger>
          <Icon name="mdi-fire" size="18px"/>
          <p class="ml-1 text-base font-semibold">Burnout Protection</p>
          <Icon
              name="mdi-menu-down"
              size="20px"
              class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
        </CollapsibleTrigger>
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent class="py-2">
          <SidebarMenuItem class="p-2">
            <div class="flex flex-row items-center justify-between">
              <div class="space-y-0.5">
                <div class="text-base">
                  Enable
                </div>
                <div class="text-sm text-muted-foreground">
                  for OLED screens
                </div>
              </div>
              <Switch :model-value="enabled" @update:model-value="updateEnabled"/>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem class="p-2">
            <div class="flex flex-col gap-3 leading-none">
              <span class="font-semibold">Radios : {{ radios }}</span>
              <Slider
                  :model-value="[radios]"
                  :max="50"
                  :min="1"
                  :step="1"
                  @update:model-value="updateRadios"
              />
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem class="p-2">
            <div class="flex flex-col gap-3 leading-none">
              <span class="font-semibold">CycleTime in minutes : {{ cycleTime }}</span>
              <Slider
                  :model-value="[cycleTime]"
                  :max="50"
                  :min="1"
                  :step="1"
                  @update:model-value="updateCycleTime"
              />
            </div>
          </SidebarMenuItem>
        </SidebarGroupContent>
      </CollapsibleContent>
    </SidebarGroup>
  </Collapsible>
</template>
