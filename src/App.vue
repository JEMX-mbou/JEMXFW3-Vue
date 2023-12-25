<template>
  <div id="main-view">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import NavBar from './jemx/components/NavBar.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('load', () => {
    document.body.classList.add('loaded')
  })
})
</script>

<style lang="scss">
html body.loaded {
  opacity: 1;
}

main {
  padding-top: 4rem;
}
</style>
