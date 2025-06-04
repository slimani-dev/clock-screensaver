<script setup lang="ts">
import {Check} from "lucide-vue-next";
import {DropdownMenuItem} from "~/components/ui/dropdown-menu";

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
  "Pica Hole - MRT",
  "Pica Hole - MRST",
  "Pica Hole - Grids",
  "Pica Hole - ABS",
   "Pica Hole - SIM",
   "Pica Hole - XPL",
   "Pica Hole - 1890 Morse",
   "Retro Party",
   "Squarodynamic 01",
   "Squarodynamic 02",
   "Squarodynamic 03",
   "Squarodynamic 04",
   "Squarodynamic 05",
   "Squarodynamic 06",
   "Squarodynamic 07",
   "Squarodynamic 08",
   "Squarodynamic 09",
   "Squarodynamic 10",
   "Atomic Clock Radio",
   "Back to 1982",
   "Digitek",
   "DS-Digital Bold",
   "DS-Digital Italic",
   "DS-Digital",
   "DS-Digital Bold Italic",
]

</script>

<template>
  <div class="grid grid-cols-4 gap4">
    <p
        v-for="font in fonts"
        :key="font"
        class="w-[var(--dropdown-trigger-width)]"
    >
      <span :style="{fontFamily: font}">{{ font }}</span>
    </p>
  </div>
</template>

<style scoped>

</style>
