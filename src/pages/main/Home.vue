<template>
  <main class="flex flex-col gap-y-4" @click="isShowBrandItems = false">
    <section class="point px-5">
      <div class="point-box bg-primary p-4 rounded-lg flex flex-col gap-y-4">
        <div class="point-box-top flex flex-row justify-between items-center">
          <div class="point-box-top-left flex flex-col items-start">
            <span class="text-sm text-font-black">보유 포인트</span>
            <span class="text-lg font-semibold text-font-black">1,000,000원</span>
          </div>

          <div class="point-box-top-right flex felx-row gap-x-1">
            <button
              class="bg-white text-font-black w-16 p-1 text-sm font-semibold focus:outline-none focus:border-none"
            >
              충전
            </button>
            <button
              class="bg-black text-font-white w-16 p-1 text-sm font-semibold focus:outline-none focus:border-none"
            >
              거래내역
            </button>
          </div>
        </div>

        <div class="point-box-bottom flex flex-row justify-around">
          <div class="point-box-bottom-item flex flex-col items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path
                d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z"
              />
            </svg>
            <span class="text-sm">E-쿠폰</span>
            <span class="text-base font-bold">0</span>
          </div>

          <div class="point-box-bottom-item flex flex-col items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
              <path
                fill-rule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-sm">시드권</span>
            <span class="text-base font-bold">0</span>
          </div>

          <div class="point-box-bottom-item flex flex-col items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-sm">반약쿠폰</span>
            <span class="text-base font-bold">0</span>
          </div>
        </div>
      </div>
    </section>

    <section class="e-coupon flex flex-col gap-y-3">
      <div class="category flex px-6 gap-x-3 flex-nowrap overflow-x-auto whitespace-nowrap">
        <div class="category-item text-primary">전체보기</div>
        <div class="category-item">편의점/마트</div>
        <div class="category-item">베이커리/도넛</div>
        <div class="category-item">커피/음료</div>
        <div class="category-item">버거/피자/치킨</div>
        <div class="category-item">영화/음악/도서</div>
        <div class="category-item">아이스크림</div>
      </div>

      <div class="brand-category flex flex-row justify-end gap-x-2 px-6 items-center">
        <div class="text-base">브랜드 검색</div>
        <div
          class="brand-select-box relative w-40 h-6 bg-white flex justify-between items-center rounded-md px-2"
          @click="isShowBrandItems = !isShowBrandItems"
          @click.stop
        >
          <span class="text-font-black text-sm">{{ selectBrandName }}</span>
          <svg
            v-if="!isShowBrandItems"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 text-font-black"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 text-font-black"
          >
            <path
              fill-rule="evenodd"
              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <div
            v-if="isShowBrandItems"
            class="brand-items absolute top-7 left-0 bg-white w-40 p-2 h-40 rounded-md flex flex-col gap-y-2 overflow-y-auto"
          >
            <div
              class="brand-item text-font-black text-left text-sm"
              @click="changeBrandHandler('전체보기')"
              @click.stop
            >
              전체보기
            </div>
            <div
              class="brand-item text-font-black text-left text-sm"
              @click="changeBrandHandler('롯데리아')"
              @click.stop
            >
              롯데리아
            </div>
            <div
              class="brand-item text-font-black text-left text-sm"
              @click="changeBrandHandler('스타벅스')"
              @click.stop
            >
              스타벅스
            </div>
            <div
              class="brand-item text-font-black text-left text-sm"
              @click="changeBrandHandler('맥도날드')"
              @click.stop
            >
              맥도날드
            </div>
            <div class="brand-item text-font-black text-left text-sm" @click="changeBrandHandler('GS25')" @click.stop>
              GS25
            </div>
            <div class="brand-item text-font-black text-left text-sm" @click="changeBrandHandler('CU')" @click.stop>
              CU
            </div>
            <div
              class="brand-item text-font-black text-left text-sm"
              @click="changeBrandHandler('롯데시네마')"
              @click.stop
            >
              롯데시네마
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6">
      <div class="line border-t border-primary"></div>
    </section>

    <section class="e-coupon-items px-6 grid grid-cols-2 gap-3">
      <ECouponItem v-for="item in 10" :key="item" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import ECouponItem from '@/components/home/ECouponItem.vue'
import { ref } from 'vue'

const selectBrandName = ref<string>('전체보기')
const isShowBrandItems = ref<boolean>(false)

const changeBrandHandler = (brandName: string) => {
  isShowBrandItems.value = false
  selectBrandName.value = brandName
}
</script>

<style lang="scss" scoped></style>
