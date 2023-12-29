import { apiClient } from './Service'

const getCandidates = (params = '') => {
  return apiClient.get(`/candidates?${params}`)
}

const getCandidateById = (id) => {
  return apiClient.get(`/candidates/${id}`)
}

const createCandidate = (data) => {
  return apiClient.post('/candidates', data)
}

const updateCandidate = (data) => {
  return apiClient.patch('/candidates', data)
}

export { getCandidates, getCandidateById, createCandidate, updateCandidate }
