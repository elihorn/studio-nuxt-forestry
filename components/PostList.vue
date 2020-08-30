<template>
  <ul class="post-list layout-grid">
    <li v-for="post in posts" :key="post.title" class="grid-item">
      <nuxt-link
        :to="{ name: target, params: { slug: post.slug } }"
        class="post-link"
      >
        <div class="post-image">
          <img :src="api_url + post.media" :alt="post.title" />
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
      required: true
    },
    target: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri+"/",
    }
  },
};
</script>
