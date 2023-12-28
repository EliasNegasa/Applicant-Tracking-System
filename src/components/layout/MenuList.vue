<template>
  <ul class="flex flex-col pt-2 pb-8">
    <MenuListItem v-for="menuItem in menuItems" :key="menuItem" :menuItem="menuItem" />
  </ul>
</template>

<script setup>
import MenuListItem from '@/components/layout/MenuListItem.vue'
import { ref } from 'vue'

const menuItems = ref([
  { name: 'Home', url: '/', icon: 'fa-solid fa-house' },
  { name: 'Candidates', url: '/candidates', icon: 'fa-solid fa-users' },
  { name: 'All Schedule', url: '/schedules', icon: 'fa-solid fa-calendar-days' },
  // { name: 'My Schedules', url: '/schedules/me', icon: 'fa-solid fa-calendar-check' },
  { name: 'Jobs', url: '/jobs', icon: 'fa-regular fa-rectangle-list' },
  { name: 'Clients', url: '/clients', icon: 'fa-solid fa-building' }
])
</script>
