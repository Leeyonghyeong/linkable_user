<template>
  <main @click="(isShowRegion1 = false), (isShowRegion2 = false)">
    <section class="search flex flex-col gap-y-2 px-6">
      <div class="input-search flex flex-row gap-x-2 items-center">
        <InputDefault v-model:value="searchKeyword" placeholder="지점명 및 대회명 검색" type="text" errorLabel="" />
      </div>
      <div class="address-search flex flex-row gap-x-2">
        <div
          class="region1-select w-full bg-white border border-gray900 rounded-md h-10 text-font-black flex flex-row justify-between relative items-center px-3"
          @click="isShowRegion1 = !isShowRegion1"
          @click.stop
        >
          <span>전체</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <div
            v-if="isShowRegion1"
            class="region1-option absolute top-10 left-0 bg-white w-full rounded-md flex flex-col gap-y-2 h-56 overflow-y-auto"
          >
            <div class="region1-option-item">서울</div>
            <div class="region1-option-item">대전</div>
            <div class="region1-option-item">대구</div>
            <div class="region1-option-item">부산</div>
            <div class="region1-option-item">광주</div>
            <div class="region1-option-item">인천</div>
            <div class="region1-option-item">세종</div>
          </div>
        </div>

        <div
          class="region2-select w-full bg-white border border-gray900 rounded-md h-10 text-font-black flex flex-row justify-between relative items-center px-3"
          @click="isShowRegion2 = !isShowRegion2"
          @click.stop
        >
          <span>전체</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <div
            v-if="isShowRegion2"
            class="region2-option absolute top-10 left-0 bg-white w-full rounded-md flex flex-col gap-y-2 h-56 overflow-y-auto"
          >
            <div class="region2-option-item">서울</div>
            <div class="region2-option-item">대전</div>
            <div class="region2-option-item">대구</div>
            <div class="region2-option-item">부산</div>
            <div class="region2-option-item">광주</div>
            <div class="region2-option-item">인천</div>
            <div class="region2-option-item">세종</div>
          </div>
        </div>
      </div>
      <div class="search-submit">
        <button
          class="w-full h-10 bg-primary text-font-black flex justify-center items-center border-none focus:outline-none hover:border-none"
        >
          검색
        </button>
      </div>
    </section>

    <section class="px-6 py-4">
      <div class="line border-t border-primary"></div>
    </section>

    <section class="tournament-items flex flex-col px-6 gap-y-4">
      <TournamentItem v-for="item in 10" :key="item" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import InputDefault from '@/components/common/InputDefault.vue'
import TournamentItem from '@/components/tournament/TournamentItem.vue'
import { useAppTitleStore } from '@/store/appTitle'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const appTitleStore = useAppTitleStore()
const { appTitle } = storeToRefs(appTitleStore)

appTitle.value = '대회정보'

const searchKeyword = ref<string>('')
const isShowRegion1 = ref<boolean>(false)
const isShowRegion2 = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
