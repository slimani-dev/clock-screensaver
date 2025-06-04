<script setup lang="ts">
import {Slider} from '@/components/ui/slider'
import {
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {SidebarGroup, SidebarGroupContent, SidebarGroupLabel} from "~/components/ui/sidebar";
import {CollapsibleContent, CollapsibleTrigger} from "reka-ui";
import {Collapsible} from "~/components/ui/collapsible";

const store = useDateSettingsStore()


const fontSize = computed(() => Number(store.fontSize.replace('vw', '')))
const topMargin = computed(() => Number(store.topMargin.replace('vh', '')))
const font = computed(() => store.font)

const updateFontSize = (payload: number[] | undefined) => {
  if (!payload) return
  store.fontSize = `${payload[0]}vw`
}

const updateTopMargin = (payload: number[] | undefined) => {
  if (!payload) return
  store.topMargin = `${payload[0]}vh`
}

const updateFont = (font: string | undefined) => {
  if (font) store.font = font
}

</script>

<template>
  <Collapsible class="group/collapsible">
    <SidebarGroup>
      <SidebarGroupLabel as-child>
        <CollapsibleTrigger>
          <Icon name="mdi-calendar-month" size="18px"/>
          <p class="ml-1 text-base font-semibold">Date Settings</p>
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
              <span class="font-semibold">Font : {{ font }}</span>
              <FontSwitcher :model-value="font" @update:model-value="updateFont"/>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem class="p-2">
            <div class="flex flex-col gap-3 leading-none">
              <span class="font-semibold">Date size : {{ fontSize }}</span>
              <Slider
                  :model-value="[fontSize]"
                  :max="50"
                  :min="0"
                  :step="0.5"
                  @update:model-value="updateFontSize"
              />
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem class="p-2">
            <div class="flex flex-col gap-3 leading-none">
              <span class="font-semibold">Date Top margin : {{ topMargin }}</span>
              <Slider
                  :model-value="[topMargin]"
                  :max="50"
                  :min="-50"
                  :step="1"
                  @update:model-value="updateTopMargin"
              />
            </div>
          </SidebarMenuItem>
        </SidebarGroupContent>
      </CollapsibleContent>
    </SidebarGroup>
  </Collapsible>
</template>
