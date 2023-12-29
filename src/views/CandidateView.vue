<template>
  <div>
    <h2 class="text-lg font-bold mb-4">Candidates List</h2>
  </div>
  <div class="flex gap-6">
    <div class="bg-white p-6 w-full shadow-md shadow-gray-100">
      <CandidateTable />
    </div>
  </div>
</template>

<script setup>
import CandidateTable from '@/components/candidate/CandidateTable.vue'
</script>
