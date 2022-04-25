<template>
  <div class="main-container">
    <main>
      <h1>Sport</h1>

      <div v-for="feed in feeds" :key="feed.id">
        <TheFeed :feed="feed" />
      </div>
    </main>
  </div>
</template>

<script>
import TheFeed from '@/components/Feed/TheFeed'
import RSSParser from 'rss-parser'

export default {
  name: 'Sport',
  components: { TheFeed },
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
          'https://www.24sata.hr/feeds/sport.xml',
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
