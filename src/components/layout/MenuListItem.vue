<template>
  <li class="text-brand-gray-medium p-2 hover:text-brand-gray-light transition-all duration-500">
    <RouterLink
      :to="menuItem.url"
      active-class="active-menu"
      class="flex flex-col items-center justify-center"
    >
      <span class="inline-flex items-center justify-center h-8 w-12">
        <font-awesome-icon :icon="menuItem.icon" />
      </span>
      <span class="text-[9px] text-center">{{ menuItem.name }} </span>
    </RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  menuItem: {
    type: Object
  }
})
</script>

<style>
.active-menu {
  @apply text-brand-green;
}
.active-menu span {
  @apply text-brand-green;
}
</style>
