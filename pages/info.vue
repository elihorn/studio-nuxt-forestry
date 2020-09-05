<template>
  <article id="content" class="works single">
    <figure class="post-image">
      <img :src="api_url + post.media" :alt="post.title" />
    </figure>
    <div class="post-body">
      <h3>{{ post.title }}</h3>
      <nuxt-content :document="post" :target="name + '-slug'" />
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri + '/'
    };
  },
  async asyncData({ app, $content, params, error }) {
    try {
      const name = 'info';
      const post = await $content(name, params.slug).fetch();
      return {
        post
      };
    } catch (error) {
      console.log(error);
      return false;
    }
  }
};
</script>
