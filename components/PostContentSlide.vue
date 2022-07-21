<template>
  <div class="post">
    <div class="post-media">
      <div
        v-for="(content, index) in post.pages[current].content"
        :key="index"
        class="post"
      >
        <image-zoom
          v-if="content.template == 'image'"
          :key="$route.params.id"
          :image="content.file"
          :title="content.title"
        />
      </div>
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
      current: parseInt(this.$route.params.id) || 0,
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
