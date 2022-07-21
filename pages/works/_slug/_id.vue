<template>
  <PostContent :key="$route.params.id" :post="post" />
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
