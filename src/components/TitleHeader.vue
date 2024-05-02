<template>
  <header>
    <div class="bg-white text-font-black w-full h-12 flex justify-center items-center text-lg font-bold">
      {{ appTitle }}
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useAppTitleStore } from '@/store/appTitle'
import { storeToRefs } from 'pinia'

const appTitleStore = useAppTitleStore()
const { appTitle } = storeToRefs(appTitleStore)
</script>

<style lang="scss" scoped></style>
