<script setup lang="ts">
import {Check, ChevronsUpDown} from 'lucide-vue-next'

import {ref} from 'vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'



const versionButton = ref<ComponentPublicInstance | undefined>()

onMounted(() => {
  const el = versionButton.value?.$el
  if (el instanceof HTMLElement) {
    const width = `${el.clientWidth - 9}px`
    console.log('width', width)
    document.documentElement.style.setProperty('--dropdown-trigger-width', width)
  }
})

const store = useClockSettingsStore()

const selectedFont = computed(() => store.font)

const fonts = [
  'mono',
  'Share Tech Mono',
  'VT323',
  'Orbitron',
  'Nova Mono',
  'Source Code Pro',
  'UnifontEX',
  'Workbench',
  'Kola',
  'Styro',
  'Array',
  'Technor',
  'Nippo',

  "Calculator",
  "Chuck Chillout",
  "delia Black",
  "delia",
  "DISPLAY TFB",
  "Energized",
  "HydrogenType",
  "JD DigiSquare",
  "LED Calculator",
  "LED Dot-Matrix",
  "Seven Segment",
  "LCDDot TR",
]

const updateFont = (font: string) => {
  store.font = font
}
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
              ref="versionButton"
              size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="font-semibold">Font</span>
              <span class="">v{{ selectedFont }}</span>
            </div>
            <ChevronsUpDown class="ml-auto"/>
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
            align="start"
        >
          <DropdownMenuItem
              v-for="font in fonts"
              :key="font"
              class="w-[var(--dropdown-trigger-width)]"
              @select="updateFont(font)"
          >
            <span :style="{fontFamily: font}">{{ font }}</span>
            <Check v-if="font === selectedFont" class="ml-auto"/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
