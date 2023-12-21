<template>
  <header>
    <MastHead :slides="slides" />
  </header>
  <main class="container">
    <h1>Home</h1>
  </main>
</template>

<script setup>
import MastHead from '../jemx/components/MastHead.vue'

const slides = {
  welcome: {
    title: 'Welcome to this website',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur, qui possimus nobis.',
    src: 'pexels-oleksandr-p-376368.jpg',
    contentClass: 'text-accent-3 bottom right text-right'
  },
  about: {
    title: 'Read about us',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur, qui possimus nobis.',
    src: 'pexels-simone-defendi-12762122.jpg',
    buttonUrl: '/about',
    buttonText: 'Read more',
    buttonClass: 'accent-3 invert',
    contentClass: 'top left bg-base text-accent-3'
  }
  // lorem: {
  //   title: 'Lorem',
  //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequuntur, qui possimus nobis.',
  //   src: 'pexels-tobias-bjørkli-2387966.jpg',
  //   buttonUrl: '/test',
  //   buttonText: 'Get active',
  //   contentPosition: 'top left'
  // }
}
</script>

<style lang="scss"></style>
