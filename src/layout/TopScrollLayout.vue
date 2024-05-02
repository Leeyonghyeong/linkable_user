<template>
  <TitleHeader />
  <RouterView />
  <TopScrollFooter />
</template>

<script lang="ts" setup>
import TitleHeader from '@/components/TitleHeader.vue'
import TopScrollFooter from '@/components/TopScrollFooter.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
