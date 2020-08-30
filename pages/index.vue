<template>
  <div id="content" class="index">
    <PostList :posts="posts" :target="name+'-slug'" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
      const name = 'blog'
      const posts = await $content(name, params.slug)
      .sortBy('date', 'desc')
      .fetch()
      return {
        posts,
        name
      }
  }
}
</script>