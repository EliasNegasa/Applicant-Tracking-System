<template>
  <div>
    <h2 class="text-lg font-bold mb-4">Feedback Submission</h2>
  </div>
  <div class="flex gap-6">
    <div class="bg-white p-6 w-8/12 shadow-md shadow-gray-100">
      <h3 class="font-bold mb-4">Submit Feedback</h3>
      <hr />
      <h4 class="my-4 font-bold text-sm">Interview Details</h4>
      <FeedbackForm :schedule="schedule" />
    </div>
    <CandidateDetails :candidateId="schedule.candidate" />
  </div>
</template>

<script setup>
import CandidateDetails from '@/components/feedback/CandidateDetails.vue'
import FeedbackForm from '@/components/feedback/FeedbackForm.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const schedule = JSON.parse(route.query.schedule)
</script>
