<template>
  <main>
    <section class="user-info px-6">
      <div class="user-info-box w-full rounded-md flex flex-row gap-x-2 items-center">
        <div class="user-profile">
          <img src="@/assets/images/icon/user_profile.png" alt="profile" />
        </div>
        <div class="font-bold flex items-center gap-x-2 text-left">
          <div class="text-lg">
            <span>이용형(참이슬)</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path
              fill-rule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>

    <section class="more-menu px-6 mt-10">
      <div class="more-menu-item text-left py-2 cursor-pointer">공지사항</div>
      <div class="more-menu-item text-left py-2 cursor-pointer">쿠폰장터</div>
      <div class="more-menu-item text-left py-2 cursor-pointer">가상계좌 발급</div>
      <div class="more-menu-item text-left py-2 cursor-pointer">계좌 변경</div>
      <div class="more-menu-item text-left py-2 cursor-pointer">문의</div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useAppTitleStore } from '@/store/appTitle'
import { storeToRefs } from 'pinia'

const appTitleStore = useAppTitleStore()
const { appTitle } = storeToRefs(appTitleStore)

appTitle.value = '더보기'
</script>

<style lang="scss" scoped></style>
