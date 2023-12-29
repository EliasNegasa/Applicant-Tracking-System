<template>
  <form @submit.prevent="submit">
    <div class="flex justify-between mb-6 gap-6">
      <div class="w-full">
        <BaseInput
          v-model="position"
          label="Interview Position"
          type="text"
          name="position"
          readonly
        />
      </div>
    </div>
    <div class="flex justify-between mb-6 gap-6">
      <div class="w-1/2">
        <BaseInput v-model="date" label="Interview Date" type="text" name="date" readonly />
      </div>
      <div class="w-1/2">
        <BaseInput
          v-model="interviewer"
          label="Interviewer Name"
          type="text"
          name="interviewer"
          readonly
        />
      </div>
    </div>
    <div class="mt-6">
      <h4 class="mt-10 font-bold text-sm">Please fill the below Information</h4>
      <hr class="mt-4 mb-10" />
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <BaseInput
            v-model="state.typingTestResult"
            label="Typing Test Result"
            type="text"
            name="typingTestResult"
          />
        </div>
        <div class="w-1/2">
          <BaseInput
            v-model="state.testGorillaResult"
            label="Test Gorilla Result"
            type="text"
            name="testGorillaResult"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <BaseSelect
            :options="educationalStatusOptions"
            v-model="state.educationalStatus"
            label="Educational Status"
            :validation="v$.educationalStatus"
          />
        </div>
        <div class="w-1/2">
          <BaseSelect
            :options="workStatusOptions"
            v-model="state.workStatus"
            label="Work Status"
            :validation="v$.workStatus"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <label class="block text-sm mb-2">Willingness to work in rotational shifts</label>
          <BaseRadioGroup
            v-model="state.rotationalShift"
            name="rotationalShift"
            :options="BooleanOptions"
            vertical
            :validation="v$.rotationalShift"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-sm mb-2 gap-6">Willingness to work on the weekends</label>
          <BaseRadioGroup
            v-model="state.weekend"
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
            v-model="state.training"
            name="training"
            :options="BooleanOptions"
            vertical
            :validation="v$.training"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-sm mb-2">3 Months Contract awareness</label>
          <BaseRadioGroup
            v-model="state.threeMonthContract"
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
            v-model="state.salary"
            name="salary"
            :options="BooleanOptions"
            vertical
            :validation="v$.salary"
          />
        </div>
        <div class="w-1/2">
          <label class="block text-sm mb-2">Kebele ID Possession</label>
          <BaseRadioGroup
            v-model="state.kebeleID"
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
            v-model="state.result"
            label="Result"
            :validation="v$.result"
          />
        </div>
        <div class="w-1/2">
          <BaseSelect :options="resultOptions" v-model="state.enockResult" label="Enock Result" />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-1/2">
          <BaseSelect
            :options="recommendedClientOptions"
            v-model="state.recommendedClient"
            label="Decision"
            :validation="v$.recommendedClient"
          />
        </div>
      </div>
      <div class="flex justify-between mb-6 gap-6">
        <div class="w-full">
          <label for="comment" class="block text-sm mb-2">Personal Feedback</label>
          <textarea
            v-model="state.personalFeedback"
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
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import BaseInput from '@/components/shared/BaseInput.vue'
import BaseSelect from '@/components/shared/BaseSelect.vue'
import BaseButton from '@/components/shared/BaseButton.vue'
import BaseRadioGroup from '@/components/shared/BaseRadioGroup.vue'
import { MDYhmFormat } from '@/utils/DateFormat.js'
import { useRouter } from 'vue-router'
import { useScheduleStore } from '@/stores/schedule'
import { feedbackValidation } from '@/validations/feedback'
import useVuelidate from '@vuelidate/core'
import { useClientStore } from '@/stores/client'

const router = useRouter()

const props = defineProps({
  schedule: {
    type: Object
  }
})

const { schedule } = toRefs(props)

const position = ref(schedule.value.position)
const date = ref(MDYhmFormat(schedule.value.date))

const interviewer = computed(() => {
  return `${schedule.value.interviewer.firstName} ${schedule.value.interviewer.lastName}`
})

const state = reactive({
  result: schedule.value.feedback?.result || '',
  enockResult: schedule.value.feedback?.enockResult || '',
  typingTestResult: schedule.value.feedback?.typingTestResult || '',
  testGorillaResult: schedule.value.feedback?.testGorillaResult || '',
  educationalStatus: schedule.value.feedback?.educationalStatus || '',
  workStatus: schedule.value.feedback?.workStatus || '',
  rotationalShift: schedule.value.feedback?.rotationalShift,
  weekend: schedule.value.feedback?.weekend,
  training: schedule.value.feedback?.training,
  threeMonthContract: schedule.value.feedback?.threeMonthContract,
  salary: schedule.value.feedback?.salary,
  kebeleID: schedule.value.feedback?.kebeleID,
  recommendedClient: schedule.value.feedback?.recommendedClient || '',
  personalFeedback: schedule.value.feedback?.personalFeedback
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

const feedbackData = {
  attendance: 'Came',
  feedback: state
}

// const v$ = useVuelidate(feedbackValidation(), state)

const scheduleStore = useScheduleStore()

async function submit() {
  // const isvalid = await v$.value.$validate()
  if (isvalid) {
    scheduleStore.editSchedule(schedule.value._id, feedbackData)
    scheduleStore.fetchSchedules(`candidate=${schedule.value.candidate}`)
    router.back()
  } else {
    console.log('Validation Error')
  }
}

function cancel() {
  router.back()
}

const clientStore = useClientStore()

const recommendedClientOptions = ref(
  clientStore.clients.map((client) => ({ label: client.name, value: client._id }))
)

onMounted(() => {
  clientStore.fetchClients()
})
</script>
