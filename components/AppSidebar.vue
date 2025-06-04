<script setup lang="ts">
import {
  Sidebar,
  SidebarHeader,
  type SidebarProps,
  SidebarRail,
} from '@/components/ui/sidebar'

const props = defineProps<SidebarProps>()
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <FontSwitcher2/>
      <FontSizeSliders/>
    </SidebarHeader>
    <SidebarRail/>
  </Sidebar>
</template>
