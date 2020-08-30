<template>
  <ul class="post-list layout-grid">
    <li v-for="post in posts" :key="post.title" class="grid-item">
      <nuxt-link
        :to="{ name: target, params: { slug: post.slug } }"
        class="post-link"
      >
        <div class="post-image">
          <img :src="post.media" :alt="post.title" />
        </div>
        <div class="post-body">
          <h2>{{ post.title }}</h2>
          <!-- <nuxt-content :document="post" /> -->
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
  }
};
</script>
