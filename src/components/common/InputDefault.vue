<template>
  <div class="flex-1">
    <input
      :value="value"
      :type="type"
      class="w-full ring-1 rounded-md p-2 focus:ring-2 focus:ring-inset placeholder:text-gray-500 outline-none text-base bg-black"
      :class="{ 'ring-error': errorLabel, 'ring-primary': !errorLabel }"
      :placeholder="placeholder"
      autocomplete="off"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      @keypress.enter="$emit('event')"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  value: string | number
  placeholder: string
  type: 'text' | 'password'
  errorLabel: string
}>()

defineEmits<{
  (e: 'update:value', value: string | number): void
  (e: 'event'): void
}>()
</script>

<style lang="scss" scoped></style>
