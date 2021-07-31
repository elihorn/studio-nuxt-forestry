<template>
  <nav class="post-nav">
    <nuxt-link
      v-if="prevParams"
      :to="{
        name: $route.name,
        params: prevParams,
      }"
      class="prev"
    >
      {{ prevText }}
    </nuxt-link>
    <nuxt-link
      v-if="nextParams"
      :to="{ name: $route.name, params: nextParams }"
      class="next"
    >
      {{ nextText }}
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    count: {
      type: Number,
      default: 0,
    },
    prevCount: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      current: parseInt(this.$route.params.media) || 0,
      prevText: 'Previous',
      nextText: 'Next',
      prevParams: false,
      nextParams: false,
    };
  },
  mounted() {
    console.log(this.$route);
    if (this.prev) {
      this.prevParams = { slug: this.prev.slug };
    }
    if (this.next) {
      this.nextParams = { slug: this.next.slug };
    }
    if (this.current > 1) {
      this.prevParams = {
        slug: this.$route.params.slug,
        media: this.current - 1,
      };
    } else if (this.current > 0) {
      this.prevParams = { slug: this.$route.params.slug };
    } else if (this.prev && this.prevCount > 0) {
      this.prevParams = { slug: this.prev.slug, media: this.prevCount };
    }
    if (this.current < this.count - 1) {
      this.nextParams = {
        slug: this.$route.params.slug,
        media: this.current + 1,
      };
    }
    window.addEventListener('keyup', this.keyPress);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyPress);
  },
  methods: {
    keyPress(e) {
      if (e.keyCode === 37) {
        // Previous page
        this.$router.push({ name: this.$route.name, params: this.prevParams });
      } else if (e.keyCode === 39) {
        // Next page
        this.$router.push({ name: this.$route.name, params: this.nextParams });
      } else if (e.keyCode === 27) {
        this.$router.push({
          path: this.$route.path.substring(
            0,
            this.$route.path.lastIndexOf('/')
          ),
        });
      }
    },
  },
};
</script>
