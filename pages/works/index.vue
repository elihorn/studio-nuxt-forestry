// the posts are passed down to the Blog List component to be rendered

<template>
  <div>
    <WorkList :posts="posts" />
  </div>
</template>

<script>
export default {
  layout: 'layout',
  async asyncData({ $content, params }) {
      const posts = await $content('works', params.slug)
      .sortBy('date', 'desc')
      .fetch()
      return {
        posts
      }
  }
}
</script>