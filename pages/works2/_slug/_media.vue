<template>
  <PostContent :key="$route.params.media" :post="post" />
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
