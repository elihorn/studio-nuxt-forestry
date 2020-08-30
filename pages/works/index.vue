<template>
  <div id="content" class="index">
    <PostList :posts="posts" :target="name+'-slug'" />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content, params }) {
    try {
      const name = 'works'
      const posts = await $content(name, params.slug)
      .sortBy('date', 'asc')
      .fetch()
      const { index } = await $content('data/indexes/works-index').only('index').fetch()
      app.$mapOrder(posts, index, 'slug')
      return {
        posts,
        name
      }
    } catch(error) {
      console.log(error)
      return false
    }
  }
}
</script>