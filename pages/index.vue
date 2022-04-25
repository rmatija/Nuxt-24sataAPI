<template>
  <div class="main-container">
    <main>
      <h1><p>Aktualno</p></h1>

      <div
        v-for="i in info"
        :key="i.id"
        class="flex flex-col overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2"
      >
        <a :href="i.link" target="_blank">
          <img
            class="h-full w-full object-cover object-center"
            :src="i.enclosure.url"
            :alt="i.title"
          />
        </a>
        <div
          class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between"
        >
          <p
            class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"
          >
            {{ i.categories[0] }} - {{ i.pubDate }}
          </p>
          <h3 class="font-semibold text-lg leading-tight truncate">
            {{ i.title }}
          </h3>
          <p class="mt-2">
            {{ removeTags(i.content) }}
          </p>
          <a :href="i.link" target="_blank">Procitaj vise...</a>
          <p
            class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"
          >
            {{ i.creator }}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import RSSParser from 'rss-parser'

export default {
  name: 'IndexPage',
  data() {
    return {
      info: [],
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
          'https://www.24sata.hr/feeds/aktualno.xml',
        (err, feed) => {
          if (err) throw err
          this.info = feed.items
          console.log(feed.items)
        }
      )
    },

    removeTags(str) {
      if (str === null || str === '') {
        return false
      } else {
        str = str.toString()
        return str.replace(/(<([^>]+)>)/gi, '')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
}

main {
  max-width: 970px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
