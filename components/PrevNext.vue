<template>
  <nav class="post-nav">
    <nuxt-link
      v-if="current > 1"
      :to="{
        name: target,
        params: { slug: $route.params.slug, media: current - 1 },
      }"
      class="prev"
    >
      {{ prev.title }}
    </nuxt-link>
    <nuxt-link
      v-else-if="current > 0"
      :to="{
        name: target,
        params: { slug: $route.params.slug },
      }"
      class="prev"
    >
      {{ prev.title }}
    </nuxt-link>
    <nuxt-link
      v-else-if="prev && prevCount > 0"
      :to="{ name: target, params: { slug: prev.slug, media: prevCount } }"
      class="prev"
    >
      {{ prev.title }}
    </nuxt-link>
    <nuxt-link
      v-else-if="prev"
      :to="{ name: target, params: { slug: prev.slug } }"
      class="prev"
    >
      {{ prev.title }}
    </nuxt-link>
    <nuxt-link
      v-if="current < count - 1"
      :to="{
        name: target,
        params: { slug: $route.params.slug, media: current + 1 },
      }"
      class="next"
    >
      {{ next.title }}
    </nuxt-link>
    <nuxt-link
      v-else-if="next"
      :to="{ name: target, params: { slug: next.slug } }"
      class="next"
    >
      {{ next.title }}
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
    name: {
      type: String,
      required: true,
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
      target: this.name + '-slug-media',
    };
  },
};
</script>
