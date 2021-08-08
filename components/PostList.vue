<template>
  <ul class="post-list layout-offset">
    <li v-for="(post, index) in posts" :key="post.slug" class="post">
      <nuxt-link
        :to="{ name: name + '-slug-media', params: { slug: post.slug } }"
        :class="[{ active: activePost === post }, `post-link`]"
        @click.native="activePost = post"
        @mouseover.native="activePost = post"
      >
        <div class="post-media">
          <nuxt-img
            :src="post.image"
            :alt="post.title"
            :placeholder="true"
            sizes="md:100vw sm:100vw xs:100vw"
            fit="contain"
            class="image-container"
            quality="90"
            format="webp"
            :loading="index > 2 ? 'lazy' : null"
          />
        </div>
        <div class="post-body">
          <h3>
            {{ post.title }}
            <span v-if="post.media && post.media.length > 1" class="count">
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
      images: [],
    };
  },
};
</script>
