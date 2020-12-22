<template>
  <div id="content" class="index">
    <PostList :posts="posts" :name="name" />
  </div>
</template>
<script>
export default {
  async asyncData({ app, $content, params, route }) {
    try {
      const name = route.name;
      const posts = await $content(name).sortBy('date', 'asc').fetch();
      const { index } = await $content('data/indexes/' + name + '-index')
        .only('index')
        .fetch();
      if (posts && index) {
        app.$mapOrder(posts, index, 'slug');
      }
      return {
        posts,
        name,
      };
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
</script>
