<template>
  <article id="content" class="works single">
    <div class="post-media">
      <nuxt-child
        :key="this.$route.params.media"
        :media="post.media"
        :title="post.title"
      />
    </div>
    <div class="post-body">
      <h3>{{ post.title }}</h3>
      <nuxt-content :document="post" :target="name + '-slug-media'" />
    </div>
    <prev-next
      :key="this.$route.params.media"
      :prev="prev"
      :next="next"
      :name="name"
      :count="post.media.length"
      :prev-count="prevCount"
    />
  </article>
</template>
<script>
export default {
  async asyncData({ app, $content, params, error }) {
    try {
      const name = 'works';
      const post = await $content(name, params.slug).fetch();
      const posts = await $content(name).only(['title', 'slug']).fetch();
      const { index } = await $content('data/indexes/works-index')
        .only('index')
        .fetch();
      app.$mapOrder(posts, index, 'slug');
      const [prev, next] = app.$surround(posts, params.slug);
      let prevCount = 0;
      if (prev) {
        const prevPost = await $content(name, prev.slug).fetch();
        prevCount = prevPost.media.length - 1;
      }
      return {
        name,
        post,
        prev,
        next,
        prevCount,
      };
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri + '/',
      current: parseInt(this.$route.params.media) || 0,
    };
  },
};
</script>
