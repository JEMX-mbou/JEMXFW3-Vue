<template>
  <nav ref="nav">
    <MenuIcon @click="openMenu()" />
    <div class="container menu-container">
      <div class="logo">
        <img src="../../assets/jemx/jemxv3-logo.svg" alt="" />
        <img class="mobile" src="../../assets/jemx/jemxv3-logo-small.svg" alt="" />
      </div>
      <ul ref="menu" class="jc-flex-start">
        <li v-for="route in routes" :key="route.id">
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
          <ul v-if="route.children">
            <li v-for="subRoute in route.children" :key="subRoute.id">
              <RouterLink :to="subRoute.path">{{ subRoute.name }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ThemeSwitch />
  </nav>
</template>

<script setup>
import { useRouter, RouterLink } from 'vue-router'
import MenuIcon from './MenuIcon.vue'
import ThemeSwitch from './ThemeSwitch.vue'
import { onMounted, ref } from 'vue'

const nav = ref('')
const menu = ref('')

const routes = useRouter().options.routes

function openMenu() {
  nav.value.classList.toggle('active')
  menu.value.classList.toggle('active')
}
</script>

<style lang="scss" scoped>
@use '../scss/utils/function/v';
@use '../scss/utils/function/spacer';
@use '../scss/utils/function/conf';
@use '../scss/utils/function/font';

@use '../scss/extend/pseudo';

$breakpoint: 's';
$x-position: 'right'; // Options: left, right, false
$animation-side: 'side'; // Options: top, side
$size: 'auto';
$text-align: 'center';

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: v.g('bg-a');
  z-index: conf.get('layout.level.menu');

  &::before {
    @extend %pseudo;
    inset: 0;
    background-color: v.g('bg-a');
    z-index: 1;
  }
  &.active {
    height: auto;
  }

  #mobile-icon {
    position: relative;
    display: inline-block;
    z-index: 2;
  }

  .container {
    display: flex;
  }

  .logo {
    position: absolute;
    inset: 0 50%;
    translate: -50% 0;
    width: fit-content;
    padding: spacer.get(1);
    z-index: 1;

    img:not(.mobile) {
      display: none;
    }
    img {
      height: 2rem;
    }
  }

  .menu-container {
    align-self: flex-end;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    background: v.g('bg-a');
    list-style: none;
    translate: 0 -110%;
    transition: translate 0.5s ease;

    &.active {
      translate: 0 0;
    }

    li {
      position: relative;
      padding: 0;
      margin: 0;

      a {
        display: block;
        padding: spacer.get(2);
        font-family: font.base();
        text-decoration: none;
        color: v.g('a1');
        text-wrap: nowrap;
        transition:
          color 0.3s ease-in,
          background 0.5s ease-in-out,
          opacity 0.5s ease-in-out;

        &:hover {
          color: v.g('a5');
          background: #0001;
        }
      }

      > ul {
        position: relative;
        translate: none;
        min-width: 100%;

        li a {
          padding: spacer.get(1) spacer.get(2) spacer.get(1) spacer.get(4);
          font-size: 0.9em;
        }
      }
    }
  }

  @media screen and (min-width: conf.get('layout.breakpoint.#{$breakpoint}')) {
    &::before {
      content: none;
    }

    #mobile-icon {
      display: none;
    }

    .logo {
      position: relative;
      inset: auto;
      translate: none;

      img:not(.mobile) {
        display: block;
      }
      img.mobile {
        display: none;
      }
    }

    ul {
      flex-direction: row;
      align-items: center;
      position: relative;
      translate: none;

      li > ul,
      &.jc-flex-start li > ul {
        left: 0;
        translate: none;
        text-align: left;
      }

      &.jc-center,
      &.jc-space-around,
      &.jc-space-between,
      &.jc-space-evenly {
        li > ul {
          left: 50%;
          translate: -50% 0;
          text-align: center;
        }
      }

      &.jc-flex-end {
        li > ul {
          left: auto;
          right: 0;
          translate: none;
          text-align: right;
        }
      }

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

        &:hover > ul {
          transform: translateY(0);
        }

        > ul {
          flex-wrap: wrap;
          flex-direction: column;
          align-items: stretch;
          position: absolute;
          width: fit-content;
          top: 100%;
          transform: translateY(calc(-100% - 3rem));
          transition: transform 0.5s ease;
          z-index: -1;

          li a {
            padding: spacer.get(1);
            opacity: 0.9;

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
