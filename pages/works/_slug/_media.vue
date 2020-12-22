<template>
  <div class="post">
    <div class="post-media">
      <figure :class="{ zoom: zoom }" @click="zoom = !zoom">
        <img :src="api_url + post.media[current].file" :alt="post.title" />
      </figure>
    </div>
    <div class="post-body">
      <h3>{{ post.media[current].title || post.title }}</h3>
      <div
        v-if="post.media[current].caption"
        v-html="post.media[current].caption"
      ></div>
      <nuxt-content v-else :document="post" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri + '/',
      current: parseInt(this.$route.params.media) || 0,
      zoom: false,
    };
  },
};
</script>
