<template>
  <div class="header-container">
    <header class="header">
      <div class="nav-wrapper">
        <div class="logo">
          <nuxt-link to="/"
            ><img
              src="https://www.24sata.hr/dist/img/logo-without-border.6cf8d912.svg"
              alt="24sata-logo"
          /></nuxt-link>
        </div>
        <div class="navigation-items">
          <ul class="flex">
            <li class="nav-item">
              <nuxt-link to="/najnovije">NAJNOVIJE</nuxt-link>
            </li>
            <li class="nav-item"><nuxt-link to="/news">NEWS</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/sport">SPORT</nuxt-link></li>
            <li class="nav-item">
              <nuxt-link to="/lifestyle">LIFESTYLE</nuxt-link>
            </li>
            <li class="nav-item"><nuxt-link to="/tech">TECH</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/fun">FUN</nuxt-link></li>
          </ul>
        </div>
        <TheSidenavToggle @toggle="sidenavToggle()" ref="mySidenavToggle" />
      </div>

      <TheSidenav
        :show="displaySidenav"
        @close="toggleAnim(), (displaySidenav = false)"
      />
    </header>
  </div>
</template>

<script>
import TheSidenavToggle from '@/components/Navigation/TheSidenavToggle.vue'
import TheSidenav from '@/components/Navigation/TheSidenav.vue'

export default {
  name: 'TheHeader',
  components: {
    TheSidenavToggle,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
  methods: {
    sidenavToggle() {
      this.displaySidenav = !this.displaySidenav
    },
    toggleAnim() {
      this.$refs.mySidenavToggle.toggleTrans()
    },
  },
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 60px;
  max-width: 970px;
  margin: 0 auto;

  .header {
    width: 100%;
    position: fixed;
    height: 60px;
    z-index: 100;

    .nav-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 970px;
      background: #fff;

      .navigation-items {
        display: none;

        .nav-item {
          margin: 0 10px;
          color: #000;

          a {
            &:hover,
            &:active,
            &.nuxt-link-active {
              color: red;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .header {
      .nav-wrapper {
        .navigation-items {
          display: block;
        }
      }
    }
  }
}
</style>
