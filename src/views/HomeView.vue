<template>
  <header>
    <MastHead
      title="JEMX"
      text="Version 3.0"
      buttonRoute="/about"
      buttonText="Read More"
      buttonClass="bg-accent-3"
      contentClass="bottom bg-base text-center col-0"
      src="pexels-oleksandr-p-376368.jpg"
    >
      <h1>JEMX <sup>v3</sup></h1>
      <p>
        Not very special or good,<br />
        but it'll get the job done.
      </p>
      <RouterLink class="mt-2" to="/about"><button class="accent-3">Read more</button></RouterLink>
    </MastHead>
  </header>
  <main id="home">
    <section class="row container jc-center py-6">
      <div class="col-12 col-m-8 text-center">
        <h2>
          A simple framework<br />
          built for Vue
        </h2>
        <p>
          What happens if you see if you could build a framework and keep on refining it, because
          you keep learning new stuff.
        </p>
        <p>This is why this is version 3. Built mainly for component based use.</p>
      </div>
    </section>
    <section class="bg-accent-5 py-6">
      <div class="row container jc-center ai-center">
        <div class="col-12 col-m-6">
          <img
            class="rounded"
            src="../assets/Home/code-screen.jpg"
            alt="Ease because of familiarity"
          />
        </div>
        <div class="col-12 col-m-6 text-base-alt px-4">
          <h2>Familiarity</h2>
          <p>
            Because I take heavy inspiration from frameworks like Bootstrap or Tailwind it will feel
            very familiar, but it's focused on developers that love SCSS/SASS.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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
