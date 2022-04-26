<template>
  <div
    ref="scrollTopButton"
    class="invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition"
  >
    <button
      @click="scrollToTop"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 flex rounded-full"
    >
      <i class="arrow up"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollToTopButton',

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton

      if (window.scrollY > 600) {
        scrollBtn.classList.remove('invisible')
      } else {
        scrollBtn.classList.add('invisible')
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
.arrow {
  border: solid #fff;
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 5px;

  &.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
}
</style>
