<template>
  <button
    @click="$emit('toggle')"
    class="hamburger-menu"
    :class="displaySidenav ? 'open' : ''"
  >
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
</template>

<script>
export default {
  props: ['displaySidenav'],
}
</script>

<style lang="scss" scoped>
.hamburger-menu {
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: rgb(143, 141, 141);
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.1s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }

    &:nth-child(4) {
      top: 18px;
    }
  }

  &.open {
    span {
      &:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
}
</style>
