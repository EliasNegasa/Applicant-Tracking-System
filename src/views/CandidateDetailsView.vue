<template>
  <div>
    <h2 class="text-lg font-bold mb-4">Candidates Details</h2>
  </div>
  <div class="flex gap-6">
    <div class="bg-white p-6 w-full shadow-md shadow-gray-100">
      <CandidateDetails />
    </div>
  </div>
</template>

<script setup>
import CandidateDetails from '@/components/candidate/CandidateDetails.vue'
</script>
