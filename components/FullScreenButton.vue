<script setup lang="ts">

import {Button} from '@/components/ui/button'
import {cn} from "~/lib/utils";
import type {HTMLAttributes} from "vue";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const toggleFullscreen = () => {
  const el = document.documentElement
  if (!document.fullscreenElement) {
    el.requestFullscreen?.()
  } else {
    document.exitFullscreen?.()
  }
}
</script>

<template>
  <Button
      variant="ghost"
      size="icon"
      :class="cn('h-7 w-7', props.class)"
      @click="toggleFullscreen"
  >
    <Icon name="mdi-fullscreen" size="24px"/>
  </Button>
</template>
