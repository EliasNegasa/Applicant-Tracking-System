import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NotificationToast } from '@/utils/NotificationToast'
import { signIn } from '@/services/AuthService'
// import { apiClient } from '@/services/service';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(JSON.parse(localStorage.getItem('user')) || {})
  const token = ref(localStorage.getItem('token') || '')
  const isLoading = ref(false)
  const error = ref('')

  async function login(userData) {
    isLoading.value = true

    try {
      const data = await signIn(userData)

      user.value = data.user
      token.value = data.token

      localStorage.setItem('token', JSON.stringify(token.value))
      localStorage.setItem('user', JSON.stringify(user.value))

      window.location.href = 'http://localhost:5173/'
      // router.push('/');
    } catch (err) {
      error.value = err.response.data.message || 'Error'

      NotificationToast(error, 'error')

      router.replace({ name: 'Login' })
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    user.value = {}
    token.value = ''
    error.value = ''
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  return { user, token, login, isLoading, logout }
})
