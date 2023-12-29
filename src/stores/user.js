import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getUsers } from '@/services/UserServices'
import { NotificationToast } from '@/utils/NotificationToast'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const isLoading = ref(false)
  const error = ref('')

  async function fetchUsers() {
    isLoading.value = true

    try {
      const { data } = await getUsers()
      users.value = data.data
    } catch (err) {
      error.value = err.response.data.message || 'Error'

      NotificationToast(error, 'error')
    } finally {
      isLoading.value = false
    }
  }

  const filterInterviewers = computed(() =>
    users.value.filter((user) => user.role == 'Interviewer')
  )

  const filterCandidates = computed(() => users.value.filter((user) => user.role == 'Candidate'))

  return { users, fetchUsers, filterInterviewers, filterCandidates }
})
