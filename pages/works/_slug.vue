// this is a dynamically created template

<template>
  <article class="blog">
      <figure class="blog__hero">
          <img :src="post.media" :alt="post.title">
      </figure>
    <div class="blog__info" >
      {{ post.media[0] }}
      <h1>{{ post.title }}</h1>
      <h3>{{ formattedDate }}</h3>
    </div>
    <nuxt-content :document="post" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>
<script>
  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri,
      }
    },
    async asyncData({ $content, params, error }) {
      try {
        const post = await $content('works', params.slug).fetch()
        const [prev, next] = await $content('works')
          .only(['title', 'slug'])
          .sortBy('date', 'asc')
          .surround(params.slug)
          .fetch()
        return {
          post,
          prev,
          next,
        }
      } catch(error) {
        console.log(error)
        return false
      }
    }, 
  }
</script>