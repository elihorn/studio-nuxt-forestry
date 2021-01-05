<template>
  <div class="post">
    <div class="post-media">
      <figure :class="{ zoom: zoom }" @click="zoom = !zoom">
        <nuxt-image
          :src="post.media[current].file"
          :alt="post.title"
          sizes="300,600:600,900"
          fit="contain"
        />
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
};
</script>
