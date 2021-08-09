<template>
  <article id="content" class="page">
    <nuxt-content :document="post" />
  </article>
</template>
<script>
export default {
  async asyncData({ app, $content, params, error, route, store }) {
    try {
      const post = await $content('info').fetch();
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
