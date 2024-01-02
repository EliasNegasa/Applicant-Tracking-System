import { apiClient } from './Service'

class CandidateService {
  getCandidates(params = '') {
    return apiClient.get(`/candidates?${params}`)
  }

  getCandidateById(id: number) {
    return apiClient.get(`/candidates/${id}`)
  }

  createCandidate(data: object) {
    return apiClient.post('/candidates', data)
  }

  updateCandidate(id: number, data: object) {
    return apiClient.patch(`/candidates/${id}`, data)
  }
}

export default new CandidateService()
