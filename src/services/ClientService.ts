import { apiClient } from './Service'

class ClientService {
  getClients(params = '') {
    return apiClient.get(`/clients?${params}`)
  }
  createClient(data: object) {
    return apiClient.post('/clients', data)
  }

  updateClient(id: number, data: object) {
    return apiClient.patch(`/clients/${id}`, data)
  }

  deleteClient(id: number) {
    return apiClient.patch(`/clients/${id}`)
  }
}

export default new ClientService()
