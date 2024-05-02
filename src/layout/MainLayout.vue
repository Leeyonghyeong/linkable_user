<template>
  <MainHeader />
  <RouterView />
  <Footer />
</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue'
import Footer from '@/components/TopScrollFooter.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
