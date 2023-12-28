<template>
  <form @submit.prevent="submit">
    <div class="mb-4">
      <BaseInput
        v-model="state.email"
        label="Email"
        type="text"
        name="email"
        autocomplete="off"
        :validation="v$.email"
      />
    </div>

    <div class="mb-4">
      <BaseInput
        v-model="state.password"
        label="Password"
        type="password"
        name="password"
        autocomplete="off"
        :validation="v$.password"
      />
    </div>

    <BaseButton
      text="Login"
      type="submit"
      button-type="primary"
      class="w-full"
      :disabled="authStore.isLoading"
    />
  </form>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import BaseInput from '@/components/shared/BaseInput.vue'
import BaseButton from '@/components/shared/BaseButton.vue'

const state = reactive({
  email: '',
  password: ''
})

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Please enter a valid email address', email)
    },
    password: {
      required: helpers.withMessage('Password is required', required),
      minLength: helpers.withMessage('Password should be at least 8 characters long', minLength(8))
    }
  }
})

const v$ = useVuelidate(rules, state)

const authStore = useAuthStore()

async function submit() {
  const isvalid = await v$.value.$validate()
  if (isvalid) {
    authStore.login({
      email: state.email,
      password: state.password
    })
  } else {
    console.log('Validation Error')
  }
}
</script>
