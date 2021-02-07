<template>
  <article id="content" class="slug">
    <nuxt-content :document="post" />
  </article>
</template>
<script>
export default {
  async asyncData({ app, $content, params, error, route, store }) {
    try {
      const name = route.name.split('-')[0];
      const post = await $content(name, params.slug).fetch();
      return {
        post,
      };
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
</script>
