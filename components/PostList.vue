<template>
  <ul class="post-list layout-grid">
    <li v-for="post in posts" :key="post.title" class="grid-item">
      <nuxt-link
        :to="{ name: name + '-slug', params: { slug: post.slug } }"
        :class="[{ active: activePost === post }, `post-link`]"
        @click.native="activePost = post"
      >
        <div class="post-media">
          <img :src="api_url + post.image" :alt="post.title" />
        </div>
        <div class="post-body">
          <h3>{{ post.title }}</h3>
          <nuxt-content :document="post" />
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri + '/',
      activePost: false,
    };
  },
};
</script>
