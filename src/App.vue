<template>
  <div id="main-view">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import NavBar from './jemx/components/NavBar.vue'
</script>

<style lang="scss" scoped>
main {
  padding-top: 4rem;
}
</style>
