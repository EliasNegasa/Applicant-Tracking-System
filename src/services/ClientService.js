import { apiClient } from './Service'

const getClients = (params = '') => {
  return apiClient.get(`/clients?${params}`)
}

const createClient = (data) => {
  return apiClient.post('/clients', data)
}

const updateClient = (id, data) => {
  return apiClient.patch(`/clients/${id}`, data)
}

const deleteClient = (id) => {
  return apiClient.patch(`/clients/${id}`)
}

export { getClients, createClient, updateClient, deleteClient }
