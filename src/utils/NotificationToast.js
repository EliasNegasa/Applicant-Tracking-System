import { toast } from 'vue3-toastify'

const NotificationToast = (message, type) => {
  toast(message, {
    type
  })
}

export { NotificationToast }
