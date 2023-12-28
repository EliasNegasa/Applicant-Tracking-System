<template>
  <div class="bg-brand-gray-light flex justify-center items-center h-screen">
    <div class="w-1/2 h-screen hidden lg:flex items-center justify-center bg-brand-dark">
      <img src="/logo-color.png" alt="Logon" class="w-2/3 h-auto" />
    </div>
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
</script>
