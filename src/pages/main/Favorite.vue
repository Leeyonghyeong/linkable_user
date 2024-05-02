<template>
  <main>
    <section class="favorite px-6 flex flex-col gap-y-4">
      <TournamentItem v-for="item in 10" :key="item" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import TournamentItem from '@/components/tournament/TournamentItem.vue'
import { useAppTitleStore } from '@/store/appTitle'
import { storeToRefs } from 'pinia'

const appTitleStore = useAppTitleStore()
const { appTitle } = storeToRefs(appTitleStore)

appTitle.value = '즐겨찾기'
</script>

<style lang="scss" scoped></style>
