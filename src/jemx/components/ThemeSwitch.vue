<template>
  <div
    id="theme-switch"
    :class="`${theme.type} ${theme.loading ? 'loading' : ''}`"
    ref="ThemeSwitch"
    v-if="theme.type"
  >
    <div class="inner" @click="changeTheme()">
      <svg id="moon_svg" viewBox="0 0 100 100">
        <path
          d="M38,40.4c0-10.3,4.9-19.5,12.4-25.4c1.1-0.8,0.7-2.5-0.7-2.5C29,12.5,12.2,29.3,12.2,50c0,20.7,16.8,37.5,37.5,37.5
			c11.4,0,21.7-5.1,28.6-13.2c0.1-0.1,0.2-0.2,0.3-0.3c0.9-1.1-0.1-2.5-1.5-2.2c-2.2,0.5-4.6,0.8-6.9,0.8C52.4,72.5,38,58.1,38,40.4
			z"
        />
      </svg>
      <svg id="sun_svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="25" />
        <g>
          <path
            d="M50,19.1c-1.9,0-3.4-1.5-3.4-3.4l0-9.8c0-1.9,1.5-3.4,3.4-3.4c0,0,0,0,0,0c1.9,0,3.4,1.5,3.4,3.4l0,9.8
		C53.4,17.6,51.9,19.1,50,19.1C50,19.1,50,19.1,50,19.1z"
          />
          <path
            d="M74.2,29.2c-0.9,0-1.8-0.3-2.4-1c-1.3-1.3-1.3-3.5,0-4.8l6.9-6.9c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8l-6.9,6.9
		C76,28.9,75.1,29.2,74.2,29.2z"
          />
          <path
            d="M84.3,53.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4l9.8,0c0,0,0,0,0,0c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4
		L84.3,53.4C84.3,53.4,84.3,53.4,84.3,53.4z"
          />
          <path
            d="M81.2,84.6c-0.9,0-1.8-0.3-2.4-1l-6.9-6.9c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0l6.9,6.9c1.3,1.3,1.3,3.5,0,4.8
		C82.9,84.2,82,84.6,81.2,84.6z"
          />
          <path
            d="M50,97.5c-1.9,0-3.4-1.5-3.4-3.4l0-9.8c0-1.9,1.5-3.4,3.4-3.4c0,0,0,0,0,0c1.9,0,3.4,1.5,3.4,3.4l0,9.8
		C53.4,96,51.9,97.5,50,97.5C50,97.5,50,97.5,50,97.5z"
          />
          <path
            d="M18.8,84.6c-0.9,0-1.8-0.3-2.4-1c-1.3-1.3-1.3-3.5,0-4.8l6.9-6.9c1.3-1.3,3.5-1.3,4.8,0c1.3,1.3,1.3,3.5,0,4.8l-6.9,6.9
		C20.6,84.3,19.7,84.6,18.8,84.6z"
          />
          <path
            d="M5.9,53.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4l9.8,0c0,0,0,0,0,0c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4
		L5.9,53.4C5.9,53.4,5.9,53.4,5.9,53.4z"
          />
          <path
            d="M25.8,29.2c-0.9,0-1.8-0.3-2.4-1l-6.9-6.9c-1.3-1.3-1.3-3.5,0-4.8c1.3-1.3,3.5-1.3,4.8,0l6.9,6.9c1.3,1.3,1.3,3.5,0,4.8
		C27.5,28.8,26.6,29.2,25.8,29.2z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from 'vue'

const theme = reactive({
  type: false,
  loading: false
})

const html = document.querySelector('html')
let ThemeSwitch = ref()

onBeforeMount(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme.type = 'dark'
  else theme.type = 'light'

  setHtmlAttribute()
})

function changeTheme() {
  theme.loading = true

  if (theme.type == 'dark') theme.type = 'light'
  else theme.type = 'dark'

  setTimeout(() => {
    setHtmlAttribute()
  }, 500)

  setTimeout(() => {
    theme.loading = false
  }, 1200)
}

function setHtmlAttribute() {
  html.removeAttribute('data-theme')
  html.setAttribute('data-theme', theme.type)
}
</script>

<style lang="scss">
@use '../scss/utils/function/conf';
@use '../scss/utils/function/v';

// @debug conf.get('theme.dark.background');
// @debug conf.get('theme.light.background');
$darkBg: conf.get('theme.dark.background');
$lightBg: conf.get('theme.light.background');

#theme-switch {
  position: relative;
  padding: 1em;
  z-index: 5;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background-color: #000;
    translate: 0 -100%;
    transition:
      translate 0.5s cubic-bezier(1, 0, 0, 0.99),
      background-color 0.3s 0.3s linear;
    z-index: -2;
  }

  &.loading::before {
    translate: 0 0;
  }

  div.inner {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5em;
    position: relative;
    height: 1.65em;
    padding: 0 0.3em;
    border-radius: 1em;
    background-color: #444;
    box-shadow: inset 0 0 0.5em #000;

    &::after {
      content: '';
      position: absolute;
      inset: -1px;
      background-color: #888;
      border-radius: 1em;
      z-index: -1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0.15em;
      width: 1.35em;
      aspect-ratio: 1/1;
      background-color: v.g('bg');
      border-radius: 50%;
      transition:
        left 0.2s 0.15s cubic-bezier(1, 0, 0, 0.99),
        background-color 0.3s linear;
      z-index: 0;
    }
  }

  svg {
    position: relative;
    width: 1.1em;
    aspect-ratio: 1/1;
    opacity: 0;
    transition: opacity 0.1s cubic-bezier(1, 0.16, 0.58, 1);
    z-index: 1;
    stroke-width: 3;

    &#moon_svg {
      fill: v.g('col');
      stroke: #fae20d;
    }

    &#sun_svg {
      fill: #fae20d;
      stroke: v.g('bg-a');
    }
  }

  &.dark {
    &::before {
      background-color: $darkBg;
    }
    .inner::before {
      left: 0.2em;
    }
    #moon_svg {
      opacity: 1;
      transition: opacity 0.2s 0.4s cubic-bezier(1, 0.16, 0.58, 1);
    }
  }
  &.light {
    &::before {
      background-color: $lightBg;
    }
    .inner::before {
      left: 1.75em;
    }
    #sun_svg {
      opacity: 1;
      transition: opacity 0.2s 0.4s cubic-bezier(1, 0.16, 0.58, 1);
    }
  }
}
</style>
