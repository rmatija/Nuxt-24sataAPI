<template>
  <div v-if="show" class="sidenav-container">
    <div v-if="show" class="sidenav-back" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div class="sidenav">
        <ul class="nav-list w-1/5" @click="$emit('close')">
          <li class="nav-item">
            <nuxt-link to="/najnovije" class="nav-link">Najnovije</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/news" class="nav-link">News</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/news" class="nav-link">Show</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/sport" class="nav-link">Sport</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/lifestyle" class="nav-link">Lifestyle</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tech" class="nav-link">Tech</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/fun" class="nav-link">Fun</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/login"><fa icon="user" /></nuxt-link>
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

  .sidenav-back {
    width: 100%;
    height: 100%;
    height: calc(100vh - 60px);
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;
    position: fixed;
    top: 70px;
    left: 0;
  }

  .sidenav {
    position: fixed;
    height: calc(100vh - 60px);
    height: 100%;
    width: 400px;
    background-color: rgb(243 243 243);
    z-index: 10;
    top: 70px;
    right: 0;
    left: 0;
    padding: 45px;
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
        }
      }
    }
  }
}
</style>
