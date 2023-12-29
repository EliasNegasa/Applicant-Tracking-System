import { apiClient } from './Service'

const getSchedules = (params = '') => {
  return apiClient.get(`/schedules?${params}`)
}

const getScheduleById = (id) => {
  return apiClient.get(`/schedules/${id}`)
}

const createSchedule = (data) => {
  return apiClient.post('/schedules', data)
}

const updateSchedule = (id, data) => {
  return apiClient.patch(`/schedules/${id}`, data)
}

const deleteSchedule = (id) => {
  return apiClient.delete(`/schedules/${id}`)
}

export { getSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule }
