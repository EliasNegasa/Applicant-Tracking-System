import { createRouter, createWebHistory } from 'vue-router'
import FeedbackView from '@/views/FeedbackView.vue'
import PhoneFeedbackView from '@/views/PhoneFeedbackView.vue'
import CandidateView from '@/views/CandidateView.vue'
import CandidateDetailsView from '@/views/CandidateDetailsView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/feedback',
      name: 'Feedback',
      component: FeedbackView,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/phone-interview/:id',
      name: 'PhoneFeedback',
      component: PhoneFeedbackView,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/candidates',
      name: 'CandidateList',
      component: CandidateView,
      meta: { requiresAuth: true }
    },
    {
      path: '/candidates/:id',
      name: 'CandidateDetails',
      component: CandidateDetailsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.token) {
    next('login')
  } else {
    next()
  }
})

export default router
