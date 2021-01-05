<template>
  <ul class="post-list layout-grid">
    <li v-for="post in posts" :key="post.slug" class="grid-item">
      <nuxt-link
        :to="{ name: name + '-slug-media', params: { slug: post.slug } }"
        :class="[{ active: activePost === post }, `post-link`]"
        @click.native="activePost = post"
      >
        <div class="post-media">
          <nuxt-image :src="post.image" :alt="post.title" sizes="300,600:600" />
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
      activePost: false,
    };
  },
};
</script>
