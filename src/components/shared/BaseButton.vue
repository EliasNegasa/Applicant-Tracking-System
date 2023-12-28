<template>
  <button :class="buttonClass" v-bind="$attrs">
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  buttonType: {
    type: String,
    default: 'primary'
  }
})

const buttonClass = computed(() => {
  return { [props.buttonType]: true }
})
</script>

<style scoped>
button {
  @apply font-bold text-sm rounded-md py-3 px-4 m-2 min-w-[150px] disabled:opacity-25 border-brand-green border-2 hover:opacity-70 transition-all;
}

.primary {
  @apply bg-brand-green text-white;
}

.secondary {
  @apply bg-transparent text-brand-green;
}
</style>
