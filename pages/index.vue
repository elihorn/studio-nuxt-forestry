<template>
  <article id="content" class="slug">
    <PostContent :key="$route.params.media" :post="post" />
    <prev-next
      :key="$route.params.media"
      :next="next"
      :prev="prev"
      :count="post.media.length"
      :prev-count="prevCount"
      :post="post"
      :name="routeName"
    />
  </article>
</template>
<script>
export default {
  async asyncData({ app, $content, params, error, route, store }) {
    try {
      const name = 'works';
      const routeName = 'works-slug-media';
      const posts = await $content(name).only(['title', 'slug']).fetch();
      const { index } = await $content('data/indexes/' + name + '-index')
        .only('index')
        .fetch();
      if (posts && index) {
        app.$mapOrder(posts, index, 'slug');
      }
      const post = await $content('works', posts[0].slug).fetch();
      const nextPost = post.media.length > 1 ? posts[0] : posts[1];
      const next = await $content('works', nextPost.slug).fetch();
      const prev = null;
      const prevCount = 0;
      store.commit('works/add', index);
      return {
        name,
        routeName,
        index,
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
};
</script>
