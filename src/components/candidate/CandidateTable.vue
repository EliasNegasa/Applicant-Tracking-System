<template>
  <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
    <div
      class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg"
    >
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-6 py-3 border-b-2 text-left text-sm">Fullname</th>
            <th class="px-6 py-3 border-b-2 text-left text-sm">Email</th>
            <th class="px-6 py-3 border-b-2 text-left text-sm">Phone</th>
            <th class="px-6 py-3 border-b-2 text-left text-sm">Status</th>
            <th class="px-6 py-3 border-b-2 text-left text-sm">Created At</th>
            <th class="px-6 py-3 border-b-2"></th>
          </tr>
        </thead>
        <tbody class="bg-white" v-if="!isLoading">
          <tr
            v-for="candidate in candidates"
            :key="candidate._id"
            class="group/row hover:bg-gray-50 transition-all duration-300"
          >
            <td class="table-data">
              <div class="text-sm">
                {{ candidate.user?.firstName }} {{ candidate.user?.lastName }}
              </div>
            </td>
            <td class="table-data">
              {{ candidate.user?.email }}
            </td>
            <td class="table-data">
              {{ candidate.user?.phoneNumber }}
            </td>
            <td class="table-data">
              <BaseChip
                v-if="candidate.status == 'Pending' || candidate.status == 'Interviewed'"
                :text="candidate.status"
                type="warning"
              />
              <BaseChip
                v-else-if="candidate.status == 'Hired'"
                :text="candidate.status"
                type="success"
              />
              <BaseChip v-else :text="candidate.status" type="danger" />
            </td>
            <td class="table-data">
              {{ DMYFormat(candidate.createdAt) }}
            </td>
            <td class="border-b border-gray-300 w-32">
              <div class="invisible group-hover/row:visible flex gap-3 px-6 py-4 text-right">
                <RouterLink :to="{ name: 'PhoneFeedback', params: { id: candidate._id } }">
                  <font-awesome-icon icon="fa-solid fa-phone-flip" />
                </RouterLink>
                <div @click="openPopup(candidate._id)">
                  <font-awesome-icon
                    icon="fa-solid fa-calendar-plus"
                    class="text-primary hover:text-secondary"
                  />
                </div>
                <RouterLink :to="{ name: 'CandidateDetails', params: { id: candidate._id } }">
                  <font-awesome-icon icon="fa-solid fa-eye" class="text-secondary" />
                </RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <TableSkeleton v-if="isLoading" />
    </div>
  </div>
  <PopUp v-show="showPopup" />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BaseChip from '@/components/shared/BaseChip.vue'

import { onMounted, computed, ref } from 'vue'
import { useCandidateStore } from '@/stores/candidate'
import { DMYFormat } from '@/utils/DateFormat.js'
import TableSkeleton from '@/components/skeleton/TableSkeleton.vue'
import { storeToRefs } from 'pinia'

const candidateStore = useCandidateStore()

const { candidates, isLoading } = storeToRefs(candidateStore)

onMounted(() => {
  candidateStore.fetchCandidates()
})

</script>

<style>
.table-data {
  @apply px-6 py-4 border-b border-gray-300 text-sm;
}
</style>
