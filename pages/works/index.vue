<template>
  <div id="content" class="index">
    <PostList :posts="posts" :target="name+'-slug'" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const name = 'works'
      const { index } = await $content('data/indexes/works-index')
      .only('index')
      .fetch()
      const posts = await $content(name, params.slug)
      .sortBy('date', 'desc')
      .fetch()
      console.log(posts, index)
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