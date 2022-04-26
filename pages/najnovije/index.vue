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

import RSSParser from 'rss-parser'

export default {
  name: 'Najnovije',
  components: { TheFeed, ScrollToTopButton },
  data() {
    return {
      feeds: [],
      parser: new RSSParser(),
    }
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.parser.parseURL(
        ' https://cors-anywhere.herokuapp.com/' +
          'https://www.24sata.hr/feeds/najnovije.xml',
        (err, feed) => {
          if (err) throw err
          this.feeds = feed.items
          console.log(feed.items)
        }
      )
    },
  },
}
</script>
