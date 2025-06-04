<script setup lang="ts">
import {
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'


const showButtons = ref(false);
const openSideBar = ref(false);

const toggleMenu = () => {
  showButtons.value = !showButtons.value
  if (showButtons.value === false) {
    openSideBar.value = false
  }
}
</script>

<template>
  <SidebarProvider v-model:open="openSideBar" :default-open="false" class="h-screen w-screen">
    <AppSidebar/>
    <main class="h-screen w-screen relative">
      <NuxtPage @click="toggleMenu()"/>

      <header
          class="absolute top-0 inset-x-0 h-12 mt-3"
          @mouseover="showButtons = true"/>

      <header
          v-show="showButtons"
          class="absolute top-0 inset-x-0 flex flex-row justify-between px-3 py-2 mt-3">
        <SidebarTrigger/>

        <FullScreenButton/>
      </header>
    </main>
  </SidebarProvider>

</template>
