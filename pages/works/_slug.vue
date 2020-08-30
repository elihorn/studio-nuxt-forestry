<template>
  <article id="content" class="works single">
      <figure class="post-image">
          <img :src="api_url + post.media" :alt="post.title">
      </figure>
    <div class="post-body" >
      <h3>{{ post.title }}</h3>
      <nuxt-content :document="post" :target="name+'-slug'" />
    </div>
    <prev-next :prev="prev" :next="next" :target="name+'-slug'" />
  </article>
</template>
<script>
  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri+"/",
      }
    },
    async asyncData({ $content, params, error }) {
      try {
        const name = 'works'
        const post = await $content(name, params.slug).fetch()
        const [prev, next] = await $content(name)
          .only(['title', 'slug'])
          .sortBy('date', 'asc')
          .surround(params.slug)
          .fetch()
        return {
          post,
          prev,
          next,
          name,
        }
      } catch(error) {
        console.log(error)
        return false
      }
    }, 
  }
</script>