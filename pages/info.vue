<template>
  <article id="content" class="page">
    <div class="post">
      <div class="post-body">
        <nuxt-content :document="post" />
      </div>
    </div>
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
