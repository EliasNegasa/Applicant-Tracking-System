<template>
  <form @submit.prevent="submit">
    <div class="flex justify-between mb-6 gap-6">
      <div class="w-full">
        <BaseInput
          v-model="schedule.position"
          label="Interview Position"
          type="text"
          name="position"
        />
      </div>
    </div>
    <div class="flex justify-between mb-6 gap-6">
      <div class="w-1/2">
        <BaseInput
          v-model="schedule.date"
          label="Interview Date"
          type="text"
          name="date"
          readonly
        />
      </div>
      <div class="w-1/2">
        <BaseInput v-model="interviewer.label" label="Interviewer Name" type="text" readonly />
        <BaseInput v-model="schedule.interviewer" type="hidden" name="interviewer" />
      </div>
    </div>
    <div class="mt-6">
      <h4 class="mt-10 font-bold text-sm">Please fill the below Information</h4>
      <hr class="mt-4 mb-10" />

      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <BaseSelect
            :options="educationalStatusOptions"
            v-model="feedback.educationalStatus"
            label="Educational Status"
            :validation="v$.educationalStatus"
          />
        </div>
        <div class="w-1/2">
          <BaseSelect
            :options="workStatusOptions"
            v-model="feedback.workStatus"
            label="Work Status"
            :validation="v$.workStatus"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <label class="block text-sm mb-2">Willingness to work in rotational shifts</label>
          <BaseRadioGroup
            v-model="feedback.rotationalShift"
            name="rotationalShift"
            :options="BooleanOptions"
            vertical
            :validation="v$.rotationalShift"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-sm mb-2 gap-6">Willingness to work on the weekends</label>
          <BaseRadioGroup
            v-model="feedback.weekend"
            name="weekend"
            :options="BooleanOptions"
            vertical
            :validation="v$.weekend"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <label class="block text-sm mb-2">Willingness to commit to 1 month training</label>
          <BaseRadioGroup
            v-model="feedback.training"
            name="training"
            :options="BooleanOptions"
            vertical
            :validation="v$.training"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-sm mb-2">3 Months Contract awareness</label>
          <BaseRadioGroup
            v-model="feedback.threeMonthContract"
            name="threeMonthContract"
            :options="BooleanOptions"
            vertical
            :validation="v$.threeMonthContract"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <label class="block text-sm mb-2">Salary</label>
          <BaseRadioGroup
            v-model="feedback.salary"
            name="salary"
            :options="BooleanOptions"
            vertical
            :validation="v$.salary"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-sm mb-2">Kebele ID Possession</label>
          <BaseRadioGroup
            v-model="feedback.kebeleID"
            name="kebeleID"
            :options="BooleanOptions"
            vertical
            :validation="v$.kebeleID"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <BaseSelect
            :options="resultOptions"
            v-model="feedback.result"
            label="Result"
            :validation="v$.result"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-full">
          <label for="comment" class="block text-sm mb-2">Personal Feedback</label>
          <textarea
            v-model="feedback.personalFeedback"
            name="personalFeedback"
            cols="30"
            rows="10"
            class="w-full min-w-full border border-gray-100 bg-gray-50 rounded-md py-2 px-3 focus:outline-none"
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end mb-6">
        <BaseButton text="Cancel" buttonType="secondary" type="button" @click="cancel" />
        <BaseButton text="Submit" type="submit" />
      </div>
    </div>
  </form>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import BaseInput from '@/components/shared/BaseInput.vue'
import BaseSelect from '@/components/shared/BaseSelect.vue'
import BaseButton from '@/components/shared/BaseButton.vue'
import BaseRadioGroup from '@/components/shared/BaseRadioGroup.vue'
import { MDYhmFormat } from '@/utils/DateFormat.js'
import { useAuthStore } from '@/stores/auth'
import { useRoute, useRouter } from 'vue-router'
import { useScheduleStore } from '@/stores/schedule'
import { feedbackValidation } from '@/validations/feedback'
import useVuelidate from '@vuelidate/core'

const router = useRouter()
const route = useRoute()

const authstore = useAuthStore()

const interviewer = computed(() => {
  return {
    label: `${authstore.user.firstName} ${authstore.user.lastName}`,
    value: authstore.user._id
  }
})

const schedule = reactive({
  date: ref(MDYhmFormat(Date.now())),
  interviewType: 'Phone',
  position: '',
  interviewer: interviewer.value.value,
  candidate: route.params.id
})

const feedback = reactive({
  result: '',
  educationalStatus: '',
  workStatus: '',
  rotationalShift: '',
  weekend: '',
  training: '',
  threeMonthContract: '',
  salary: '',
  kebeleID: '',
  personalFeedback: ''
})

const resultOptions = ref([
  { label: 'Passed', value: 'Passed' },
  { label: 'Failed', value: 'Failed' }
])

const educationalStatusOptions = ref([
  { label: 'Collage Dropout', value: 'Collage Dropout' },
  { label: '12th graduate', value: '12th graduate' },
  { label: 'Undergraduate', value: 'Undergraduate' },
  { label: 'Bachelors Degree', value: 'Bachelors Degree' },
  { label: 'Masters Degree', value: 'Masters Degree' },
  { label: 'Doctorate or Ph.D.', value: 'Doctorate or Ph.D.' }
])

const workStatusOptions = ref([
  { label: 'Employed', value: 'Employed' },
  { label: 'Unemployed', value: 'Unemployed' },
  { label: 'Self-Employed', value: 'Self-Employed' },
  { label: 'Freelancer', value: 'Freelancer' },
  { label: 'Intern', value: 'Intern' }
])

const BooleanOptions = ref([
  { label: 'Yes', value: true },
  { label: 'No', value: false }
])

const v$ = useVuelidate(feedbackValidation(), feedback)

const scheduleStore = useScheduleStore()

async function submit() {
  const isvalid = await v$.value.$validate()
  if (isvalid) {
    scheduleStore.addSchedule({ ...schedule, attendance: 'Came', feedback })
    router.back()
  } else {
    console.log('Validation Error')
  }
}

function cancel() {
  router.back()
}
</script>
