<template>
  <div
    class="flex flex-col overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2 items-stretch h-full"
  >
    <a :href="feed.link" target="_blank" class="img-container">
      <img
        class="h-full w-full object-cover object-center"
        :src="feed.enclosure.url"
        :alt="feed.title"
      />
    </a>
    <div
      class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between items-stretch h-full relative"
    >
      <span class="category font-bold" :class="changeBackground">{{
        feed.categories[0]
      }}</span>
      <p
        class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2"
      >
        {{ feed.pubDate }}
      </p>
      <h3 class="font-semibold text-lg leading-tight truncate">
        {{ feed.title }}
      </h3>
      <p class="mt-2">{{ removeTags(feed.content) }}...</p>
      <a :href="feed.link" target="_blank" class="mt-4"
        ><button class="read-more">Pročitaj više...</button></a
      >
      <p class="text-sm text-gray-700 tracking-wide font-semibold mt-2">
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

  computed: {
    changeBackground() {
      if (this.feed.categories[0] == 'Sport') return 'bg-green'
      else if (this.feed.categories[0] == 'Vijesti') return 'bg-blue'
      else if (this.feed.categories[0] == 'Show') return 'bg-orange'
      else if (this.feed.categories[0] == 'Tech') return 'bg-lightblue'
      else if (this.feed.categories[0] == 'Lifestyle') return 'bg-pink'
      else if (this.feed.categories[0] == 'News') return 'bg-news'
      else return 'bg-purple'
    },
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  height: 100%;
  overflow: hidden;

  img {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

h3 {
  display: inline-block;
  text-decoration: none;
  color: #000;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: red;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
}

.category {
  margin-top: -2.9rem;
  color: #fff;
  padding: 0.2rem 0.5rem;
  position: absolute;
  text-transform: uppercase;
  left: 0;
}

.read-more {
  display: inline-block;
  padding: 0.1rem 0.7rem;
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(105, 221, 250);
    border-radius: 20px;
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken(#0cf, 10%);
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}

.bg-blue {
  background-color: blue;
}

.bg-red {
  background-color: red;
}

.bg-green {
  background-color: rgb(1, 166, 1);
}

.bg-orange {
  background-color: orange;
}

.bg-purple {
  background-color: purple;
}
.bg-pink {
  background-color: pink;
}
.bg-lightblue {
  background-color: rgb(103, 103, 250);
}
</style>
