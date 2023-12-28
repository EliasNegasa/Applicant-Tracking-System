import axios from 'axios'
import _ from 'lodash'

let token = _.replace(localStorage.getItem('token'), /"/g, '')

console.log('TOKEN', token)

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})
// Authorization: `Bearer ${token}`,

export { apiClient }
