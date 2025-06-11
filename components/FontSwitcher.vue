<script setup lang="ts">
import {cn} from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

const selectTrigger = ref()
const selectWidth = ref(0)

onMounted(() => {
  if (selectTrigger.value) {
    selectWidth.value = selectTrigger.value.$el?.clientWidth
    console.log('`${selectTrigger.value.clientWidth}px`', `${selectTrigger.value.$el?.clientWidth}px`)
  }
})

</script>

<template>
  <Select
      class="w-full relative"
      :model-value="model"
      @update:model-value="updateFont">
    <SelectTrigger ref="selectTrigger" class="w-full">
      <SelectValue placeholder="Select a Font"/>
    </SelectTrigger>
    <SelectContent :style="{width: `${selectWidth + 3}px`}">
      <SelectItem
          v-for="font in fonts"
          :key="font.name"
          :value="font"
          :class="cn(font.className)">
        {{ font.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
