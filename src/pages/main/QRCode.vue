<template>
  <main class="flex flex-col gap-y-6">
    <section class="qrcode px-6">
      <div class="qrcode-box bg-primary rounded-lg p-3 flex flex-col gap-y-3 items-center">
        <div class="timer text-error font-bold">{{ numberToAddZero(min) }}:{{ numberToAddZero(sec) }}</div>
        <div>
          <img :src="qrcode" :alt="qrcode" class="w-40 h-40" />
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
import axios from 'axios'

const appTitleStore = useAppTitleStore()
const { appTitle } = storeToRefs(appTitleStore)

appTitle.value = 'QRCode'

const qrcode = ref<string>('')

const getQrCode = async () => {
  const { data } = await axios.get('http://192.168.219.43:3000/qrcode')

  qrcode.value = data
}

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

onMounted(async () => {
  await getQrCode()
  startTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss" scoped></style>
