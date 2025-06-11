<script setup lang="ts">
import {
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import {Toaster} from '@/components/ui/sonner'
import {toast} from 'vue-sonner'
import 'vue-sonner/style.css'

const {$pwa} = useNuxtApp()

const showButtons = ref(true);
const openSideBar = ref(false);

const clockStore = useClockSettingsStore()


const toggleMenu = () => {
  showButtons.value = !showButtons.value
  if (!showButtons.value) {
    openSideBar.value = false
    clockStore.dummyData = false
  }
}

onMounted(() => {
  if ($pwa?.offlineReady)
    toast.success('App ready to work offline')
})

</script>

<template>
  <NuxtPwaManifest/>
  <Toaster/>
  <SidebarProvider v-model:open="openSideBar" :default-open="false" class="h-screen w-screen">
    <AppSidebar/>
    <main class="h-screen w-screen overflow-clip">
      <ClientOnly>
        <NuxtPage @click="toggleMenu()"/>
      </ClientOnly>

      <div class="w-full h-full relative">
        <div class="w-full h-full" @click="toggleMenu()"/>

        <header
            class="absolute top-0 inset-x-0 h-12 mt-3"
            @mouseover="showButtons = true"/>
        <header
            v-show="showButtons"
            class="absolute top-0 inset-x-0 flex flex-row justify-between px-3 py-2 mt-3">
          <SidebarTrigger/>
          <div class="space-x-3">
            <WakeLook/>
            <LazyDarkModeSwitch/>
            <FullScreenButton/>
          </div>
        </header>
      </div>
    </main>
  </SidebarProvider>

</template>
