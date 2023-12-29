<template>
  <div class="bg-white p-6 w-4/12 shadow-md shadow-gray-100">
    <h3 class="font-bold mb-4">Candidate Details</h3>
    <hr />
    <CandidateSkeleton v-if="isLoading" />
    <div class="mt-4" v-if="!isLoading">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium">Full name</dt>
          <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 text-right">
            {{ candidate.user?.firstName }}
            {{ candidate.user?.lastName }}
            {{ candidate.user?.surName }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium">Email</dt>
          <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 text-right">
            {{ candidate.user?.email }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium">Phone</dt>
          <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 text-right">
            {{ candidate.user?.phoneNumber }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium">Location</dt>
          <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 text-right">
            {{ candidate.location }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium">Source</dt>
          <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 text-right">
            {{ candidate.source }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium">CV</dt>
          <dd class="mt-1 text-sm sm:col-span-2 sm:mt-0 text-right"></dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getCandidateById } from '@/services/CandidateService'
import CandidateSkeleton from '@/components/skeleton/CandidateSkeleton.vue'

const isLoading = ref(true)

const props = defineProps({
  candidateId: {
    type: String
  }
})

const candidate = ref({})

onMounted(async () => {
  const { data } = await getCandidateById(props.candidateId)
  candidate.value = data
  isLoading.value = false
})
</script>
