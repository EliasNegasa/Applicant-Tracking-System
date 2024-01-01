import { required, helpers } from '@vuelidate/validators'
import { computed } from 'vue'

const scheduleValidation = () => {
  const rules = computed(() => {
    return {
      candidate: {
        required: helpers.withMessage('Candidate is required', required)
      },
      duration: {
        required: helpers.withMessage('Duration is required', required)
      },
      date: {
        required: helpers.withMessage('Date is required', required)
      },
      position: {
        required: helpers.withMessage('Position is required', required)
      },
      interviewType: {
        required: helpers.withMessage('interviewType is required', required)
      },
      interviewer: {
        required: helpers.withMessage('interviewer is required', required)
      }
    }
  })

  return rules
}

export { scheduleValidation }
