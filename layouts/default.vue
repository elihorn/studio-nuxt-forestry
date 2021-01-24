<template>
  <div id="page">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    isInfoPage() {
      return this.$nuxt._route.name === 'info' && true;
    },
    classObject() {
      return this.$nuxt._route.name.split('-');
    },
  },
  mounted() {
    // Clear locaStorage saved position
    window.onbeforeunload = function (e) {
      localStorage.savedPosition = undefined;
    };
  },
};
</script>
