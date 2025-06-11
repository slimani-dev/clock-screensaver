<script setup lang="ts">
import {Button} from '@/components/ui/button';
import {type BasicColorSchema, useColorMode} from '@vueuse/core';
import {type HTMLAttributes, onMounted} from 'vue';
import {cn} from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const mode = useColorMode();
const themeSettingsStore = useThemeSettingsStore();
const savedTheme = computed(() => themeSettingsStore.savedTheme);
const systemPrefersDark = window?.matchMedia('(prefers-color-scheme: dark)')?.matches;
const preferred: BasicColorSchema = systemPrefersDark ? 'dark' : 'light';

onMounted(() => {
  mode.value = savedTheme.value === 'auto' || !savedTheme.value ? preferred : savedTheme.value;
});

const rotateTheme = () => {
  //  light → dark → auto → light...
  const next: BasicColorSchema = savedTheme.value === 'light' ? 'dark' : savedTheme.value === 'dark' ? 'auto' : 'light';

  mode.value = next;
  themeSettingsStore.savedTheme = next;
};

const icon = computed(() => {
  /**
   * based on the themeSettingsStore.savedTheme
   * mdi-weather-night
   * mdi-weather-sunny
   * mdi-monitor-shimmer
   */
  return themeSettingsStore.savedTheme === 'auto' ? 'mdi-monitor-shimmer' : themeSettingsStore.savedTheme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night';
})
</script>

<template>
  <Button
      variant="ghost"
      size="icon"
      :class="cn('h-7 w-7', props.class)"
      @click="rotateTheme">
    <Icon :name="icon" size="24px"/>
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
