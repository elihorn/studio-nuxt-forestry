<template>
  <div class="post">
    <div class="post-media">
      <figure :class="{ zoom: zoom }" @click="zoomImage">
        <nuxt-img
          v-if="!zoom"
          :src="post.media[current].file"
          :alt="post.title"
          sizes="sm:100vw,640"
          fit="contain"
          class="scaled"
          quality="90"
          format="webp"
        />
        <nuxt-img
          v-if="zoom"
          :src="post.media[current].file"
          :alt="post.title"
          fit="contain"
          width="original"
          class="unscaled"
          quality="100"
          format="webp"
        />
      </figure>
    </div>
    <div class="post-body">
      <h3>
        {{ post.media[current].title || post.title }}
        <span v-if="post.media.length > 1" class="count">
          (
          <span>{{ current + 1 }}</span>
          /
          <span>{{ post.media.length }}</span>
          )
        </span>
      </h3>
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
  beforeMount() {
    const root = document.documentElement;
    root.addEventListener('mousemove', (e) => {
      root.style.setProperty(
        '--mouse-x',
        (e.clientX / e.view.innerWidth) * 100 + '%'
      );
      root.style.setProperty(
        '--mouse-y',
        (e.clientY / e.view.innerHeight) * 100 + '%'
      );
    });
  },
  methods: {
    zoomImage(e) {
      this.zoom = !this.zoom;
    },
  },
};
</script>
