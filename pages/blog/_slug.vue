<template>
  <article class="blog">
      <figure class="blog__hero">
          <img :src="api_url + post.hero_image" :alt="post.title">
      </figure>
    <div class="blog__info" >
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
        api_url: process.env.strapiBaseUri+"/"
      }
    },
    computed: {
      formattedDate() {
        return new Date(this.post.date).toDateString().slice(4)
      }, 
    },
    // get the slug as a param to import the correct md file
    async asyncData({ $content, params, error }) {
      try {
        const post = await $content('blog-posts', params.slug).fetch()
        const [prev, next] = await $content('blog-posts')
          .only(['title', 'slug'])
          .sortBy('date', 'asc')
          .surround(params.slug)
          .fetch()
        return {
          post,
          prev,
          next,
        }
      } catch(err) {
        console.log(err)
        return false
      }
    }, 
  }
</script>