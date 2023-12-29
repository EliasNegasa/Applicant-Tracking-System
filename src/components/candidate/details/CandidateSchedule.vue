<template>
  <h3 class="font-bold mb-4">Schedules</h3>
  <hr />
  <ScheduleSkeleton v-if="isLoading" />
  <ol class="border-l-2 border-secondary border-opacity-25 mt-10">
    <li v-for="schedule in schedules" :key="schedule._id">
      <div class="flex-start md:flex">
        <div
          class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#fcd9d3] text-secondary"
        >
          <font-awesome-icon icon="fa-regular fa-calendar" class="text-xs" />
        </div>
        <div
          class="mb-10 ml-6 block rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 w-full group/list"
        >
          <div class="mb-4 flex justify-between">
            <span class="text-secondary"
              >Interview for
              <span class="font-bold">{{ schedule.position }}</span>
              position</span
            >
            <span class="text-sm text-secondary">{{ MDYhmFormat(schedule.date) }}</span>
          </div>
          <BaseChip
            v-if="schedule.interviewType == 'In-person'"
            :text="schedule.interviewType"
            type="warning"
          />
          <BaseChip
            v-if="schedule.interviewType == 'Phone'"
            :text="schedule.interviewType"
            type="info"
          />
          <BaseChip
            v-else-if="schedule.interviewType == 'Client'"
            :text="schedule.interviewType"
            type="success"
          />
          <template v-if="schedule.interviewType != 'Phone'">
            <BaseChip
              v-if="schedule.attendance == 'Came'"
              :text="schedule.attendance"
              type="success"
              class="mx-2"
            />

            <BaseChip
              v-if="schedule.attendance == 'Absent'"
              :text="schedule.attendance"
              type="danger"
              class="mx-2"
            />

            <BaseChip
              v-if="schedule.attendance == 'Pending'"
              :text="schedule.attendance"
              type="warning"
              class="mx-2"
            />
          </template>
          <div class="flex justify-between">
            <ul class="max-w-md mt-4 text-sm leading-relaxed">
              <li class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-xs" />

                <span class="mx-2">Duration:</span>
                <span>{{ schedule.duration }}</span>
              </li>
              <li class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-xs" />

                <span class="mx-2">Interviewer:</span>
                <span
                  >{{ schedule.interviewer?.firstName }} {{ schedule.interviewer?.lastName }}</span
                >
              </li>

              <li class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-xs" />

                <span class="mx-2">Scheduled by:</span>
                <span>{{ schedule.createdBy?.firstName }} {{ schedule.createdBy?.lastName }}</span>
              </li>
            </ul>
            <div class="mt-4 invisible group-hover/list:visible transition-all duration\">
              <RouterLink :to="{ name: 'Feedback', query: { schedule: JSON.stringify(schedule) } }">
                <BaseButton
                  :text="schedule.feedback ? 'View Feedback' : 'Add Feedback'"
                  buttonType="primary"
                />
              </RouterLink>
              <BaseButton
                v-if="CheckDate(schedule.date) && !schedule.feedback"
                text=" Cancel"
                buttonType="secondary"
                @click="handleCancel(schedule._id)"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  </ol>
  <ConfirmationDialog v-if="openPopup" @close="handleClose" @confirm="handleConfirm" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BaseButton from '@/components/shared/BaseButton.vue'
import BaseChip from '@/components/shared/BaseChip.vue'
import { MDYhmFormat } from '@/utils/DateFormat.js'
import { CheckDate } from '@/utils/CheckDate.js'
import { useScheduleStore } from '@/stores/schedule'
import ScheduleSkeleton from '@/components/skeleton/ScheduleSkeleton.vue'
import { storeToRefs } from 'pinia'
import ConfirmationDialog from '@/components/candidate/details/ConfirmationDialog.vue'
import { deleteSchedule } from '@/services/ScheduleService'
import { NotificationToast } from '@/utils/NotificationToast'

const openPopup = ref(false)
const scheduleId = ref()

const route = useRoute()

const scheduleStore = useScheduleStore()

const { schedules, isLoading } = storeToRefs(scheduleStore)

function handleCancel(id) {
  scheduleId.value = id
  openPopup.value = true
}

function handleClose() {
  openPopup.value = false
}

async function handleConfirm() {
  try {
    const { data } = await deleteSchedule(scheduleId.value)
    openPopup.value = false
    data ? NotificationToast('Interview Cancelled!', 'success') : ''
    scheduleStore.fetchSchedules(`candidate=${route.params.id}`)
  } catch (error) {
    NotificationToast(error.response.data.message || 'Error', 'error')
    openPopup.value = false
  }
}

onMounted(() => {
  scheduleStore.fetchSchedules(`candidate=${route.params.id}`)
})
</script>
