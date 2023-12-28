<template>
  <nav class="flex items-center bg-white pr-4 h-16 shadow-sm fixed pl-16 w-full">
    <div class="flex items-center justify-between w-full py-2">
      <img src="/recruitify-text.png" alt="Logo" class="w-32 p-4" />
      <TheProfile />
    </div>
  </nav>
</template>

<script setup lang="ts">
import TheProfile from '@/components/auth/TheProfile.vue'
</script>
