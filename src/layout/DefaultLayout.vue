<template>
  <TitleHeader />
  <RouterView />
  <Footer />
</template>

<script lang="ts" setup>
import TitleHeader from '@/components/TitleHeader.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
