<script setup lang="ts">
import {
  Sidebar, SidebarMenu,
  type SidebarProps,
  SidebarRail,
} from '@/components/ui/sidebar'
import {SidebarContent} from "~/components/ui/sidebar";

const props = defineProps<SidebarProps>()
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarContent>
      <SidebarMenu>
        <SettingsClock/>
        <SettingsDate/>
        <SettingsBurnoutPrevention/>
      </SidebarMenu>
    </SidebarContent>
    <SidebarRail/>
  </Sidebar>
</template>
