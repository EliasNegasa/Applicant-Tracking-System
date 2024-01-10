import { defineStore } from 'pinia'
import { ref } from 'vue'
import ClientService from '@/services/ClientService'
import { NotificationToast } from '@/utils/NotificationToast'

export const useClientStore = defineStore('client', () => {
  const clients = ref([])
  const isLoading = ref(false)
  const error = ref('')

  async function fetchClients(params = '') {
    isLoading.value = true

    try {
      const { data } = await ClientService.getClients(params)
      clients.value = data.data
    } catch (err) {
      error.value = err.response.data.message || 'Error'

      NotificationToast(error, 'error')
    } finally {
      isLoading.value = false
    }
  }

  return { clients, fetchClients, isLoading }
})
