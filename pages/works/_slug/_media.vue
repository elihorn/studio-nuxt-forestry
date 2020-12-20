<template>
  <figure :class="{ zoom: zoom }" @click="zoom = !zoom">
    <img :src="api_url + media[current]" :alt="title" />
  </figure>
</template>
<script>
export default {
  props: {
    media: {
      type: Array,
      default: () => null,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    console.log('media');
    return {
      api_url: process.env.strapiBaseUri + '/',
      current: parseInt(this.$route.params.media) || 0,
      zoom: false,
    };
  },
};
</script>
