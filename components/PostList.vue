<template>
  <ul class="post-list layout-offset">
    <li v-for="post in posts" :key="post.slug" class="post">
      <nuxt-link
        :to="{ name: name + '-slug-media', params: { slug: post.slug } }"
        :class="[{ active: activePost === post }, `post-link`]"
        @click.native="activePost = post"
        @mouseover.native="activePost = post"
      >
        <div class="post-media">
          <!-- <nuxt-image
            v-if="post.image === 'random'"
            :src="
              post.media[Math.floor(Math.random() * post.media.length)].file
            "
            :alt="post.title"
            sizes="300,600:600"
            fit="contain"
            class="image-container"
          /> -->
          <nuxt-img
            :src="api_url + post.image"
            :alt="post.title"
            sizes="300,600:600"
            fit="contain"
            class="image-container"
            format="webp"
          />
        </div>
        <div class="post-body">
          <h3>
            {{ post.title }}
            <span v-if="post.media.length > 1" class="count">
              (
              <span>{{ post.media.length }}</span>
              )
            </span>
          </h3>
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
