<template>
  <article id="content" class="slug">
    <nuxt-child :key="$route.params.media" :post="post" />
    <prev-next
      :key="$route.params.media"
      :prev="prev"
      :next="next"
      :count="post.media.length"
      :prev-count="prevCount"
      :post="post"
    />
  </article>
</template>
<script>
export default {
  async asyncData({ app, $content, params, error, route, store }) {
    try {
      const name = route.name.split('-')[0];
      const post = await $content(name, params.slug).fetch();
      const posts = await $content(name).only(['title', 'slug']).fetch();
      const { index } = await $content('data/indexes/' + name + '-index')
        .only('index')
        .fetch();
      if (posts && index) {
        app.$mapOrder(posts, index, 'slug');
      }
      const [prev, next] = app.$surround(posts, params.slug);
      let prevCount = 0;
      if (prev) {
        const prevPost = await $content(name, prev.slug).fetch();
        prevCount = prevPost.media.length - 1;
      }
      store.commit('works/add', index);
      return {
        name,
        post,
        index,
        prev,
        next,
        prevCount,
      };
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
</script>
