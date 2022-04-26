<template>
  <div class="main-container">
    <main>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="feed in feeds" :key="feed.id">
          <TheFeed :feed="feed" />
        </div>
      </div>
      <ScrollToTopButton />
    </main>
  </div>
</template>

<script>
import TheFeed from '@/components/Feed/TheFeed'
import ScrollToTopButton from '@/components/ScrollToTop/ScrollToTopButton'

import fetchData from '@/composables/fetchData'

export default {
  name: 'Najnovije',
  components: { TheFeed, ScrollToTopButton },
  extends: fetchData,
  data() {
    return {
      url: 'https://www.24sata.hr/feeds/najnovije.xml',
    }
  },

  mounted: function () {
    this.fetchData(this.url)
  },
}
</script>
