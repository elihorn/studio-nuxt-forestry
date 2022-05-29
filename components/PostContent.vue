<template>
  <div class="post">
    <div class="post-media">
      <figure
        :key="zoomDir"
        v-custom-cursor="zoomDir"
        :class="{ zoom: zoom, zoomable: zoomable }"
        @click="zoomImage"
      >
        <nuxt-img
          :src="post.media[current].file"
          width="20"
          fit="contain"
          class="placeholder"
          quality="1"
          format="webp"
        />
        <nuxt-img
          v-on-load
          :src="post.media[current].file"
          :alt="post.title"
          sizes="lg:1000px md:100vw sm:100vw xs:100vw"
          id="post-image"
          class="scaled"
          ref="postImage"
          quality="90"
          format="webp"
        />
        <img
          v-if="zoom"
          :src="api_url + post.media[current].file"
          :alt="post.title"
          class="unscaled"
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
      zoomable: false,
      zoomDir: false,
      zoomedImage: false,
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
  mounted() {
    this.zoomedImage = new Image();
    const t = this;
    this.zoomedImage.onload = function () {
      t.isZoomable();
    };
    this.zoomedImage.src = this.api_url + this.post.media[this.current].file;
    this.isZoomable();
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    zoomImage() {
      if (this.zoomable) {
        this.zoom = !this.zoom;
        this.zoomDir = this.zoom ? 'zoom-out' : 'zoom';
      } else {
        this.zoomDir = false;
      }
    },
    isZoomable() {
      const imageHeight = this.$refs.postImage.$el.clientHeight;
      this.zoomable = this.zoomedImage.height > imageHeight * 1.1;
      if (!this.zoomable) {
        this.zoomDir = false;
        this.zoom = false;
      } else if (!this.zoomDir) {
        this.zoomDir = this.zoom ? 'zoom-out' : 'zoom';
      }
    },
    onResize() {
      this.isZoomable();
    },
  },
};
</script>
