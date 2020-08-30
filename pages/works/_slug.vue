<template>
  <article id="content" class="works single">
      <figure class="post-image">
          <img :src="api_url + post.media" :alt="post.title">
      </figure>
    <div class="post-body" >
      <h3>{{ post.title }}</h3>
      <nuxt-content :document="post" :target="prev_next_target" />
    </div>
    <prev-next :prev="prev" :next="next" />
  </article>
</template>
<script>
  export default {
    data() {
      return {
        api_url: process.env.strapiBaseUri+"/",
        prev_next_target: 'works-slug',
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