<template>
  <div class="flex items-center ps-4 border border-gray-200 rounded my-2">
    <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      :id="id"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
      class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-blue-500"
    />
    <label v-if="label" :for="id" class="text-sm w-full py-4 ms-2 font-medium cursor-pointer">{{
      label
    }}</label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    required: true
  },
  id: {
    type: String
  }
})
</script>
