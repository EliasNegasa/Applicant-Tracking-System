<template>
  <div>
    <h2 class="text-lg font-bold mb-4 ml-4">Home</h2>
  </div>
  <div class="flex gap-6">
    <div class="w-full shadow-md shadow-gray-100">
      <DashboardCard />
    </div>
  </div>
</template>

<script setup>
import DashboardCard from '../components/home/DashboardCard.vue'
</script>
