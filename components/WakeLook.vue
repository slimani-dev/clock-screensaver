<script setup lang="ts">
import {useWakeLock} from '@/composables/useWakeLock'
import {cn} from "~/lib/utils";
import {Button} from "~/components/ui/button";
import type {HTMLAttributes} from "vue";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const {isActive, toggleWakeLock} = useWakeLock()
</script>

<template>
  <div class="w-0 h-0 overflow-hidden">
    <Icon name="mdi-lightbulb" size="0px"/>
  </div>
  <Button
      variant="ghost"
      size="icon"
      :class="cn('h-7 w-7', props.class)"
      @click="toggleWakeLock"
  >
    <Icon v-if="isActive" name="mdi-lightbulb" size="24px"/>
    <Icon v-else name="mdi-lightbulb-off-outline" size="24px"/>
  </Button>
</template>

<style scoped>

</style>
