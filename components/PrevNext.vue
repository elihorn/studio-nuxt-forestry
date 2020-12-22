<template>
  <nav class="post-nav">
    <nuxt-link
      v-if="current > 1"
      :to="{
        name: name,
        params: { slug: $route.params.slug, media: current - 1 },
      }"
      class="prev"
    >
      {{ prevText }}
    </nuxt-link>
    <nuxt-link
      v-else-if="current > 0"
      :to="{
        name: name,
        params: { slug: $route.params.slug },
      }"
      class="prev"
    >
      {{ prevText }}
    </nuxt-link>
    <nuxt-link
      v-else-if="prev && prevCount > 0"
      :to="{ name: name, params: { slug: prev.slug, media: prevCount } }"
      class="prev"
    >
      {{ prevText }}
    </nuxt-link>
    <nuxt-link
      v-else-if="prev"
      :to="{ name: name, params: { slug: prev.slug } }"
      class="prev"
    >
      {{ prevText }}
    </nuxt-link>
    <nuxt-link
      v-if="current < count - 1"
      :to="{
        name: name,
        params: { slug: $route.params.slug, media: current + 1 },
      }"
      class="next"
    >
      {{ nextText }}
    </nuxt-link>
    <nuxt-link
      v-else-if="next"
      :to="{ name: name, params: { slug: next.slug } }"
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
      name: this.$route.name,
      prevText: 'Previous',
      nextText: 'Next',
    };
  },
};
</script>
