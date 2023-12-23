<template>
  <div id="masthead" :class="`${masthead.typeClass} ${masthead.sizeClass}`">
    <div v-if="masthead.typeClass == 'static'" class="item">
      <img :src="`${masthead.baseUrl}/${masthead.staticSrc}`" :alt="masthead.staticTitle" />
      <div :class="`content ${props.contentClass ? props.contentClass : ''}`">
        <slot />
      </div>
    </div>

    <div v-else-if="props.slides" class="item-container" ref="itemContainer">
      <div v-for="slide in props.slides" :key="slide.id" class="item">
        <img
          :src="`${masthead.baseUrl}/${slide.src}`"
          :alt="slide.title"
          :class="slide.imagePosition"
        />

        <div :class="`content ${slide.contentClass ? slide.contentClass : ''}`">
          <h2 v-if="slide.title">{{ slide.title }}</h2>

          <p v-if="slide.text" class="my-2">{{ slide.text }}</p>

          <a v-if="slide.buttonUrl" :href="slide.buttonUrl">
            <button :class="`${slide.buttonClass ? slide.buttonClass : ''}`">
              {{ slide.buttonText }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue'
// import { RouterLink } from 'vue-router'

const props = defineProps({
  size: String,
  src: String,
  contentClass: String,
  slides: Object,
  baseUrl: String
})

const masthead = reactive({
  sizeClass: '',
  typeClass: '',
  staticSrc: '',
  staticTitle: '',
  baseUrl: '/src/assets/Masthead'
})

const itemContainer = ref('')

onBeforeMount(() => {
  mastheadDefaults()
})

onMounted(() => {
  if (props.slides) itemContainer.value.children[0].classList.add('active')

  startSlider()
})

function mastheadDefaults() {
  if (props.size) {
    masthead.sizeClass = 'size-' + props.size
  } else {
    masthead.sizeClass = 'size-l'
  }

  masthead.typeClass = 'static'

  if (props.slides && Object.keys(props.slides).length > 1) {
    masthead.typeClass = 'slider'
  }

  if (props.slides && Object.keys(props.slides).length == 1) {
    masthead.staticSrc = Object.entries(props.slides)[0][1].src
    masthead.staticTitle = Object.entries(props.slides)[0][1].title
  } else {
    masthead.staticSrc = props.src
    masthead.staticTitle = props.title
  }

  if (props.baseUrl) {
    masthead.baseUrl = props.baseUrl
  }

  // console.log(masthead)
}

function startSlider() {
  setInterval(() => {
    // let next = false
    // let slidingItem = false
    // Object.values(itemContainer.value.children).forEach((item) => {
    //   if (next) {
    //     item.classList.add('active')
    //     next = false
    //   }
    //   if (item.classList.contains('active')) {
    //     slidingItem = item
    //     item.classList.remove('active')
    //     item.classList.add('sliding')
    //     next = true
    //   }
    //   setTimeout(() => {
    //     slidingItem.classList.remove('sliding')
    //   }, 1000)
    // })
  }, 3000)
}
</script>

<style lang="scss" scoped>
@use '../scss/utils/function/spacer';
@use '../scss/extend/pseudo';

#masthead {
  position: relative;
  width: 100%;
  background-color: #000;
  overflow: hidden;

  &.size-s {
    height: 25vh;
  }
  &.size-m {
    height: 50vh;
  }
  &.size-l {
    height: 100vh;
  }

  .item-container {
    position: relative;
    width: 100%;
    height: 100%;

    .item {
      translate: 100% 0;

      &.active {
        translate: 0 0;
      }

      &.sliding {
        translate: -100% 0;
      }
    }
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 4.5rem 2rem 2rem;
    z-index: 1;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }

    .content {
      display: flex;
      flex-direction: column;
      // width: min(20rem, 100%);
      padding: spacer.get(2);

      h1,
      h2,
      h3,
      p {
        line-height: 1em;
      }

      &.top {
        align-self: flex-start;
      }

      &.bottom {
        align-self: flex-end;
      }

      &.left {
        margin-right: auto;
      }

      &.right {
        margin-left: auto;
      }
    }
  }
}
</style>
