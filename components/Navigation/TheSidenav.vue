<template>
  <div v-if="show" class="sidenav-container">
    <transition name="slide-side">
      <div class="sidenav">
        <ul class="nav-list w-1/5" @click="$emit('close')">
          <li class="nav-item">
            <nuxt-link to="/najnovije" class="nav-link">NAJNOVIJE</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/news" class="nav-link">NEWS</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/news" class="nav-link">SHOW</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/sport" class="nav-link">SPORT</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/lifestyle" class="nav-link">LIFESTYLE</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tech" class="nav-link">TECH</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/fun" class="nav-link">FUN</nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;

  .sidenav {
    position: fixed;
    height: calc(100vh - 60px);
    height: 100%;
    width: 100%;
    background-color: rgb(243 243 243);
    z-index: 10;
    top: 60px;
    right: 0;
    left: 0;
    padding: 30px;
    transform: translateX(0);

    .slide-side-enter-active,
    .slide-side-leave-active {
      transition: all 0.3s ease-out;
    }

    .slide-side-enter,
    .slide-side-leave-to {
      transform: translateX(-100%);
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .nav-item {
        margin: 20px 0;

        .nav-link {
          display: inline-block;
          text-decoration: none;
          color: #000;
          font-size: 1.5rem;

          &::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: red;
            transition: width 0.3s;
          }

          &:hover::after {
            width: 100%;
          }

          &:hover,
          &:active {
            color: red;
          }
        }
      }
    }
  }
}
</style>
