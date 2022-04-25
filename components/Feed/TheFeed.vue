<template>
  <div
    class="flex flex-col overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2"
  >
    <a :href="feed.lnk" target="_blank">
      <img
        class="h-full w-full object-cover object-center"
        :src="feed.enclosure.url"
        :alt="feed.title"
      />
    </a>
    <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
      <p
        class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"
      >
        {{ feed.categories[0] }} - {{ feed.pubDate }}
      </p>
      <h3 class="font-semibold text-lg leading-tight truncate">
        {{ feed.title }}
      </h3>
      <p class="mt-2">
        {{ removeTags(feed.content) }}
      </p>
      <a :href="feed.link" target="_blank">Procitaj vise...</a>
      <p
        class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"
      >
        Autor: {{ feed.creator }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['feed'],
  methods: {
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

<style></style>
