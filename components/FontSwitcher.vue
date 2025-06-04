<script setup lang="ts">
import {Check, ChevronsUpDown} from 'lucide-vue-next'

import {cn} from '@/lib/utils'
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxTrigger
} from '@/components/ui/combobox'

import {Button} from "~/components/ui/button";
import type {AcceptableValue} from "reka-ui";

const model = defineModel<string>()
const updateFont = (font: AcceptableValue) => {
  if (typeof font === "string") model.value = font
}

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
</script>

<template>
  <Combobox
      by="label"
      class="w-full"
      :model-value="model"
      @update:model-value="updateFont"
  >
    <ComboboxAnchor class="w-full">
      <ComboboxTrigger as-child>
        <Button variant="outline" class="w-full justify-between">
          {{ model ?? 'Select font' }}

          <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50"/>
        </Button>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxList class="w-full">
      <div class="relative w-full items-start">
        <ComboboxInput
            class=" focus-visible:ring-0 border-0 border-b rounded-none h-10"
            placeholder="Select font..."/>

      </div>

      <ComboboxEmpty>
        Nothing found.
      </ComboboxEmpty>

      <ComboboxGroup>
        <ComboboxItem
            v-for="font in fonts"
            :key="font"
            :value="font"
            :style="{fontFamily: font}">
          {{ font }}
          <ComboboxItemIndicator>
            <Check :class="cn('ml-auto h-4 w-4')"/>
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
