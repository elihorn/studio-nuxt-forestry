<template>
  <figure
    :key="zoomDir"
    v-custom-cursor="zoomDir"
    :class="{ zoom: zoom, zoomable: zoomable }"
    @click="zoomImage"
  >
    <nuxt-img
      :src="image"
      width="20"
      fit="contain"
      class="placeholder"
      quality="1"
      format="webp"
    />
    <nuxt-img
      v-on-load
      :src="image"
      :alt="title"
      sizes="lg:1000px md:100vw sm:100vw xs:100vw"
      id="post-image"
      class="scaled"
      ref="postImage"
      quality="90"
      format="webp"
    />
    <img v-if="zoom" :src="api_url + image" :alt="title" class="unscaled" />
  </figure>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: () => null,
    },
    title: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri + '/',
      current: parseInt(this.$route.params.id) || 0,
      zoom: false,
      zoomable: false,
      zoomDir: false,
      zoomedImage: false,
    };
  },
  mounted() {
    console.log(this.image);
    this.zoomedImage = new Image();
    const t = this;
    this.zoomedImage.onload = function () {
      t.isZoomable();
    };
    this.zoomedImage.src = this.api_url + this.image;
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
