<template>
    <div
        class="feed-container flex flex-col overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2 items-stretch h-full"
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
            <p class="date text-sm text-gray-700 font-semibold mt-2">
                {{ changeDate }}
            </p>
            <h2 class="font-semibold text-xl leading-tight truncate">
                {{ feed.title }}
            </h2>
            <p class="mt-2">{{ removeTags }}...</p>
            <a :href="feed.link" target="_blank" class="mt-4"
                ><span class="read-more">Pročitaj više...</span></a
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

    computed: {
        removeTags() {
            return this.feed.content.replace(/(<([^>]+)>)/gi, '')
        },
        changeBackground() {
            if (this.feed.categories == 'Sport') return 'bg-green'
            else if (this.feed.categories == 'Vijesti') return 'bg-blue'
            else if (this.feed.categories == 'Show') return 'bg-orange'
            else if (this.feed.categories == 'Tech') return 'bg-lightblue'
            else if (this.feed.categories == 'Lifestyle') return 'bg-pink'
            else if (this.feed.categories == 'News') return 'bg-news'
            else return 'bg-purple'
        },
        changeDate() {
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: '2-digit',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                timeZone: 'UTC',
            }

            return new Date(this.feed.pubDate).toLocaleDateString(
                'hr-HR',
                options
            )
        },
    },
}
</script>

<style lang="scss" scoped>
.feed-container {
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

    h2 {
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

    .date {
        &::first-letter {
            text-transform: uppercase;
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
}
</style>
