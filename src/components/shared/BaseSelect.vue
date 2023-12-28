<template>
  <div>
    <label v-if="label" class="block text-sm mb-2">{{ label }}</label>
    <select
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value)
        }
      }"
    >
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        :selected="option === modelValue"
      >
        {{ option.label }}
      </option>
    </select>
    <template v-if="validation && validation.$errors">
      <span v-for="error in validation.$errors" :key="error.$uid" class="text-red-600 text-sm">
        {{ error.$message }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    validation: {
      type: Object
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
  height: 52px;
  min-width: 300px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  @apply border border-gray-100 bg-gray-50 rounded-md;
}
</style>
