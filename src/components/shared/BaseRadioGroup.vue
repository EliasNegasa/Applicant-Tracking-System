<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical
    }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      :id="`${name}-${option.value}`"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
  <template v-if="validation && validation.$errors">
    <span v-for="error in validation.$errors" :key="error.$uid" class="text-red-600 text-sm">
      {{ error.$message }}
    </span>
  </template>
</template>

<script setup>
import BaseRadio from '@/components/shared/BaseRadio.vue'

defineProps({
  options: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number, Boolean],
    required: true
  },
  vertical: {
    type: Boolean,
    default: false
  },
  validation: {
    type: Object
  }
})
</script>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
