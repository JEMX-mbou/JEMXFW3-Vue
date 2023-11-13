<template>
  <nav>
    <div class="container">
      <MenuIcon @click="openMenu()" />
      <ul ref="menu" class="jc-space-around">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>
          <RouterLink to="/about">About</RouterLink>
          <ul class="jc-flex-end">
            <li><a href="">test</a></li>
            <li><a href="">lorem test</a></li>
            <li><a href="">lange met ballen</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MenuIcon from './MenuIcon.vue'
import { ref } from 'vue'

const menu = ref('')

function openMenu() {
  menu.value.classList.toggle('active')
}
</script>

<style lang="scss" scoped>
@use '../scss/utils/function/v';
@use '../scss/utils/function/spacer';
@use '../scss/utils/function/conf';
@use '../scss/utils/function/font';

$breakpoint: 'xxl';
$x-position: 'right'; // Options: left, right, false
$animation-side: 'side'; // Options: top, side
$size: 'auto';
$text-align: 'center';

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: v.g('bg-a');

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-direction: column;

    li {
      position: relative;
      padding: 0;
      margin: 0;

      a {
        display: block;
        padding: spacer.get(1);
        font-family: font.base();
        text-decoration: none;
        color: v.g('a5');
        background: v.g('bg-a');
        transition:
          color 0.3s ease-in,
          background 0.5s ease-in-out,
          opacity 0.5s ease-in-out;

        &:hover {
          color: v.g('a1');
          background: #0001;
        }
      }
    }
  }

  @media screen and (min-width: conf.get('layout.breakpoint.#{$breakpoint}')) {
    ul.jc-center li > ul,
    ul li > ul.jc-center {
      left: 50%;
      translate: -50% 0;
      text-align: center;
    }
    ul.jc-flex-end li > ul,
    ul li > ul.jc-flex-end {
      right: 0;
      text-align: right;
    }

    ul {
      flex-direction: row;

      li {
        a {
          display: block;
          padding: spacer.get(1);
          font-family: font.base();
          text-decoration: none;
          color: v.g('a5');
          background: v.g('bg-a');
          transition:
            color 0.3s ease-in,
            background 0.5s ease-in-out,
            opacity 0.5s ease-in-out;

          &:hover {
            color: v.g('a1');
            background: #0001;
          }
        }

        > ul {
          position: absolute;
          top: 100%;
          flex-direction: column;
          align-items: stretch;

          a {
            opacity: 0.9;
            text-wrap: nowrap;

            &:hover {
              background: v.g('bg-a');
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
