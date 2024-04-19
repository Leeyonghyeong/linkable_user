<template>
  <div>
    <label :for="id" class="block text-sm font-bold text-start">{{ label }}</label>
    <div class="mt-2"></div>
    <input
      :value="value"
      :id="id"
      :type="type"
      class="w-full ring-1 rounded-md p-2 focus:ring-2 focus:ring-inset placeholder:text-gray-500 outline-none text-base"
      :class="{ 'ring-error': errorLabel, 'ring-primary': !errorLabel }"
      :placeholder="placeholder"
      autocomplete="off"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      @keypress.enter="$emit('event')"
    />
    <span v-if="errorLabel" class="block text-start mt-1.5 text-xs text-error">{{ errorLabel }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  value: string | number
  id: string
  label: string
  placeholder: string
  type: 'text' | 'password'
  errorLabel: string
}>()

defineEmits<{
  (e: 'update:value', value: string | number): void
  (e: 'event'): void
}>()
</script>
