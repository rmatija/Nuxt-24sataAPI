import RSSParser from 'rss-parser'

export default {
  data() {
    return {
      feeds: [],
      parser: new RSSParser(),
    }
  },

  methods: {
    fetchData(url) {
      this.parser.parseURL(
        ' https://cors-anywhere.herokuapp.com/' + `${url}`,
        (err, feed) => {
          if (err) throw err
          this.feeds = feed.items
          console.log(feed.items)
        }
      )
    },
  },
}
