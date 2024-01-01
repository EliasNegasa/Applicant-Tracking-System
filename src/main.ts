import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHouse,
  faCommentDots,
  faUsers,
  faCalendarCheck,
  faEye,
  faCalendarPlus,
  faCircleCheck,
  faPhoneFlip,
  faTriangleExclamation,
  faComments,
  faBuilding,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faCircleXmark, faRectangleList } from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'
import router from './router'
import Vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

library.add(
  faCalendar,
  faHouse,
  faCommentDots,
  faUsers,
  faCalendarCheck,
  faEye,
  faCalendarPlus,
  faCircleCheck,
  faCircleXmark,
  faPhoneFlip,
  faTriangleExclamation,
  faComments,
  faBuilding,
  faRectangleList,
  faCalendarDays
)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(Vue3Toastify, {
  autoClose: 3000,
  transition: toast.TRANSITIONS.FLIP,
  position: toast.POSITION.BOTTOM_RIGHT,
  theme: toast.THEME.COLORED,
  hideProgressBar: true
})

app.use(createPinia())
app.use(router)

app.mount('#app')
