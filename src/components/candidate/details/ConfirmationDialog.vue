<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog">
    <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
      <div class="opacity-25 w-full h-full absolute z-10 inset-0"></div>
      <div
        class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 pt-8 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg"
      >
        <div class="md:flex items-center">
          <div
            class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto"
          >
            <font-awesome-icon
              icon="fa-solid fa-triangle-exclamation"
              class="text-yellow-500 text-2xl"
            />
          </div>
          <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <p class="font-bold">Warning!</p>
            <p class="text-sm text-gray-700 mt-1">
              Are you sure you want to cancel this interview schedule?
            </p>
          </div>
        </div>
        <div class="text-center md:text-right mt-4 md:flex md:justify-end">
          <button
            id="confirm-delete-btn"
            @click="handleConfirm"
            class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-secondary text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2"
          >
            Yes
          </button>
          <button
            id="confirm-cancel-btn"
            @click="handleClose"
            class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close', 'confirm'])

function handleConfirm() {
  emit('confirm')
}

function handleClose() {
  emit('close')
}
</script>
