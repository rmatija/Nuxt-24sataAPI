<template>
  <div class="header">
    <div class="header-container">
      <header class="header-wrapper">
        <div class="nav-wrapper">
          <div class="logo" @click="displaySidenav = false">
            <nuxt-link to="/"
              ><img
                src="https://www.24sata.hr/dist/img/logo-without-border.6cf8d912.svg"
                alt="24sata-logo"
            /></nuxt-link>
          </div>
          <div class="navigation-items">
            <ul class="flex">
              <li class="nav-item">
                <nuxt-link to="/" exact>AKTUALNO</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/najnovije">NAJNOVIJE</nuxt-link>
              </li>
              <li class="nav-item"><nuxt-link to="/news">NEWS</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/show">SHOW</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/sport">SPORT</nuxt-link></li>
              <li class="nav-item">
                <nuxt-link to="/lifestyle">LIFESTYLE</nuxt-link>
              </li>
              <li class="nav-item"><nuxt-link to="/tech">TECH</nuxt-link></li>
              <li class="nav-item"><nuxt-link to="/fun">FUN</nuxt-link></li>
              <li class="nav-item">
                <nuxt-link to="/login"><fa icon="user" /></nuxt-link>
              </li>
            </ul>
          </div>
          <TheSidenavToggle
            @toggle="sidenavToggle()"
            :displaySidenav="displaySidenav"
          />
        </div>

        <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
      </header>
    </div>
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
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  background-color: #fff;

  .header-container {
    height: 70px;
    border-bottom: 2px solid gray;

    .header-wrapper {
      position: relative;
      max-width: 970px;
      height: 70px;
      margin: 0 auto;
      padding: 15px 30px;

      .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 970px;

        .navigation-items {
          display: none;

          .nav-item {
            padding: 12px;
            color: #000;

            a {
              &.nuxt-link-active {
                color: red;
                border-bottom: 2px solid red;
              }
              color: #000;
              text-transform: uppercase;
              font-weight: 700;
              display: inline-block;
              transition: all 0.2s;

              &:hover {
                transform: skewY(1deg) skewX(-15deg) scale(1.1);
                border-bottom: 2px solid red;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .header-container {
      .header-wrapper {
        padding: 10px;
      }
    }
  }

  @media (min-width: 900px) {
    .header-container {
      .header-wrapper {
        .nav-wrapper {
          .navigation-items {
            display: block;
          }
        }
      }
    }
  }
}
</style>
