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
    async asyncData({ app, $content, params, error }) {
      try {
        const name = 'works'
        const posts = await $content(name).fetch()
        const { index } = await $content('data/indexes/works-index').only('index').fetch()
        app.$mapOrder(posts, index, 'slug')
        const post = posts[0]
        const [prev, next] = app.$surround(posts, post.slug);
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