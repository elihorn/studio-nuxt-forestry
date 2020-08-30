<template>
  <nav class="post-nav">
    <nuxt-link
      v-if="next"
      :to="{ name: target, params: { slug: next.slug } }"
      class="next"
    >
      {{ next.title }}
    </nuxt-link>
    <nuxt-link
      v-if="prev"
      :to="{ name: target, params: { slug: prev.slug } }"
      class="prev"
    >
      {{ prev.title }}
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    },
    target: {
      type: String,
      required: true
    }
  }
};
</script>
