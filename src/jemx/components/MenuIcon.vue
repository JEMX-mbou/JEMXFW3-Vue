<template>
  <button @click="iconClick()" ref="icon" id="mobile-icon">
    <span class="box">
      <span class="inner"></span>
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const icon = ref('')
function iconClick(e) {
  icon.value.classList.toggle('is-active')
  // console.log(icon.value.classList)
}
</script>

<style lang="scss" scoped>
@use '../scss/utils/function/spacer';
@use '../scss/utils/function/v';

$icon-line-width: 2rem;
$icon-line-height: 0.3rem;
$icon-line-spacing: 0.2rem;

#mobile-icon {
  display: inline-block;
  padding: spacer.get(2);
  border: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  .box {
    width: 3rem;
    height: 100%;
    display: inline-block;
    position: relative;
  }
  .inner {
    display: block;
    top: 50%;
    translate: 0 -50%;
    // background-color: v.g('col-a');

    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &,
    &::before,
    &::after {
      position: absolute;
      width: 2rem;
      height: 0.2rem;
      background-color: v.g('col-a');
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }

    &::before,
    &::after {
      content: '';
      display: block;
    }

    &::before {
      top: ($icon-line-spacing + $icon-line-height) * -1;
      transition:
        top 0.1s 0.25s ease-in,
        opacity 0.1s ease-in;
    }

    &::after {
      bottom: ($icon-line-spacing + $icon-line-height) * -1;
      transition:
        bottom 0.1s 0.25s ease-in,
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.is-active {
    .inner,
    .inner::before,
    .inner::after {
      background-color: v.g('a1');
    }

    .inner {
      transform: rotate(225deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: 0;
        opacity: 0;
        transition:
          top 0.1s ease-out,
          opacity 0.1s 0.12s ease-out;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition:
          bottom 0.1s ease-out,
          transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>
