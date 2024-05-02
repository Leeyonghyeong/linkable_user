<template>
  <div class="tournament-item border border-primary rounded-md flex flex-col">
    <div class="shop-name flex flex-row justify-between items-center border-b border-primary p-3">
      <span>지점명입니다</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    </div>

    <div class="shop-info text-left flex flex-col gap-y-1 p-3">
      <div class="addr">서울특별시 강남구 논현동 111-11</div>
      <div class="tel flex flex-row gap-x-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <a href="tel:01012341234" class="text-font-white hover:text-font-white">전화걸기</a>
      </div>
    </div>

    <div class="tournament-info bg-black rounded-bl-md rounded-br-md p-3 border-t border-primary flex flex-col gap-y-2">
      <div class="tournament-name flex flex-row justify-between">
        <span>대회명 입니다</span>
        <div>상태: <span class="text-primary">모집중</span></div>
      </div>

      <div class="price-submit flex flex-row justify-between items-center">
        <div class="price text-primary">참가 금액 50,000원</div>
        <div class="submit">
          <button
            class="outline-none border-none focus:outline-none hover:border-none p-2 w-20 bg-primary text-font-black"
          >
            대회 참가
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
