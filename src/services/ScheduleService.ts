import { apiClient } from './Service'

class ScheduleService {
  getSchedules(params = '') {
    return apiClient.get(`/schedules?${params}`)
  }

  getScheduleById(id: number) {
    return apiClient.get(`/schedules/${id}`)
  }

  createSchedule(data: object) {
    return apiClient.post('/schedules', data)
  }

  updateSchedule(id: number, data: object) {
    return apiClient.patch(`/schedules/${id}`, data)
  }

  deleteSchedule(id: number) {
    return apiClient.delete(`/schedules/${id}`)
  }
}

export default new ScheduleService()
