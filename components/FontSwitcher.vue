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
import type {Font} from "~/types";
import {fonts} from '~/data/fonts'

const model = defineModel<Font>()

function isFont(obj: unknown): obj is Font {
  return (
      typeof obj === 'object' &&
      obj !== null &&
      'name' in obj &&
      typeof (obj as { name?: unknown }).name === 'string' &&
      'className' in obj &&
      typeof (obj as { className?: unknown }).className === 'string'
  );
}

const updateFont = (font: Font | AcceptableValue) => {
  if (isFont(font)) {
    model.value = font;
  }
};

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
          {{ model?.name ?? 'Select font' }}

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
            :key="font.name"
            :value="font"
            :class="cn(font.className)">
          {{ font.name }}
          <ComboboxItemIndicator>
            <Check :class="cn('ml-auto h-4 w-4')"/>
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
</template>
