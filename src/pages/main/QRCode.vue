<template>
  <main class="flex flex-col gap-y-6">
    <section class="qrcode px-6">
      <div class="qrcode-box bg-primary rounded-lg p-3 flex flex-col gap-y-3 items-center">
        <div class="timer text-error font-bold">{{ numberToAddZero(min) }}:{{ numberToAddZero(sec) }}</div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt="qrcode"
            class="w-40 h-40"
          />
        </div>
        <div class="text-font-black">01049389004</div>
      </div>
    </section>

    <section class="user-info px-6">
      <div class="user-info-box bg-white rounded-lg p-3 flex flex-col gap-y-2">
        <div class="flex flex-row justify-between items-center">
          <span class="text-sm text-gray-500">성명</span>
          <span class="text-sm text-font-black font-semibold">이용형</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-sm text-gray-500">닉네임</span>
          <span class="text-sm text-font-black font-semibold">참이슬</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-sm text-gray-500">전화번호</span>
          <span class="text-sm text-font-black font-semibold">01049389004</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-sm text-gray-500">출금계좌</span>
          <span class="text-sm text-font-black font-semibold">기업은행 13109620701014</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-sm text-gray-500">입금계좌</span>
          <span class="text-sm text-font-black font-semibold">기업은행 13109620701014</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <span class="text-sm text-gray-500">가입일</span>
          <span class="text-sm text-font-black font-semibold">2024.04.23 18:33</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useAppTitleStore } from '@/store/appTitle'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { numberToAddZero } from '@/function/number'

const appTitleStore = useAppTitleStore()
const { appTitle } = storeToRefs(appTitleStore)

appTitle.value = 'QRCode'

const min = ref<number>(0)
const sec = ref<number>(0)

let timer: NodeJS.Timeout

const startTimer = () => {
  min.value = 3
  sec.value = 0

  timer = setInterval(() => {
    if (min.value >= 0) {
      sec.value -= 1

      if (sec.value < 0) {
        sec.value = 59
        min.value -= 1
      }
    }

    if (min.value === -1) {
      min.value = 0
      sec.value = 0
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss" scoped></style>
