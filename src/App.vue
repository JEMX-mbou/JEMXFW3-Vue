<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'

import NavBar from './jemx/components/NavBar.vue'
</script>

<style lang="scss" scoped></style>
