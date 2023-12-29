<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 text-center">
          <a
            class="px-5 py-3 rounded block cursor-pointer"
            @click="toggleTabs(1)"
            :class="{ 'text-secondary border-b-2 border-secondary': openTab === 1 }"
          >
            Personal Information
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 text-center">
          <a
            class="px-5 py-3 rounded block cursor-pointer"
            @click="toggleTabs(2)"
            :class="{ 'text-secondary border-b-2 border-secondary': openTab === 2 }"
          >
            Interview Schedules
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 text-center">
          <a
            class="px-5 py-3 rounded block cursor-pointer"
            @click="toggleTabs(3)"
            :class="{ 'text-secondary border-b-2 border-secondary': openTab === 3 }"
          >
            Attachments
          </a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded min-h-[600px]"
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <h3 class="font-bold mb-4">Personal Information</h3>
            </div>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <CandidateSchedule />
            </div>
            <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <h3 class="font-bold mb-4">Attachments</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CandidateSchedule from '@/components/candidate/details/CandidateSchedule.vue'

const openTab = ref(2)

function toggleTabs(tabNumber) {
  openTab.value = tabNumber
}
</script>
