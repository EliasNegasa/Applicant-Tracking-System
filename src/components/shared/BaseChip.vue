<template>
  <span
    :class="chipClass"
    class="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full"
  >
    <span v-if="text" class="absolute inset-0 rounded-full"></span>
    <span class="relative text-xs">{{ text }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String
  },
  type: {
    type: String,
    default: 'success'
  }
})

const chipClass = computed(() => {
  return { [props.type]: true }
})
</script>

<style>
.success {
  @apply bg-green-100 text-green-900;
}
.danger {
  @apply bg-red-100 text-red-900;
}
.warning {
  @apply bg-orange-100 text-orange-900;
}
.info {
  @apply bg-blue-100 text-blue-900;
}
</style>
