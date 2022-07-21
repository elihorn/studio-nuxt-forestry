<template>
  <div class="post">
    <component :is="postTemplate" :post="post"></component>
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
      current: parseInt(this.$route.params.id) || 0,
    };
  },
  computed: {
    postTemplate() {
      const template = 'post-content-' + this.post.pages[this.current].template;
      return template;
    },
  },
};
</script>
