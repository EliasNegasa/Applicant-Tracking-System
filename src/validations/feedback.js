import { required, helpers } from '@vuelidate/validators'
import { computed } from 'vue'

const feedbackValidation = () => {
  const rules = computed(() => {
    return {
      result: {
        required: helpers.withMessage('Result is required', required)
      },
      educationalStatus: {
        required: helpers.withMessage('Educational Status is required', required)
      },
      workStatus: {
        required: helpers.withMessage('Work Status is required', required)
      },
      rotationalShift: {
        required: helpers.withMessage(
          'Willingness to work in rotational shifts is required',
          required
        )
      },
      weekend: {
        required: helpers.withMessage('Willingness to work on the weekends is required', required)
      },
      training: {
        required: helpers.withMessage(
          'Willingness to commit to 1 month training is required',
          required
        )
      },
      threeMonthContract: {
        required: helpers.withMessage('3 Months Contract awareness is required', required)
      },
      salary: {
        required: helpers.withMessage('Salary is required', required)
      },
      kebeleID: {
        required: helpers.withMessage('Kebele ID Possession is required', required)
      }
    }
  })

  return rules
}

export { feedbackValidation }
