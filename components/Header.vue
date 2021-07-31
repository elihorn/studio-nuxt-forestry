<template>
  <div id="header">
    <nav>
      <ul class="menu">
        <li id="root">
          <nuxt-link v-if="$route.name != 'info'" to="/info">
            Eli Horn
          </nuxt-link>
          <span v-else class="link close" @click="to">
            <p>Close</p>
          </span>
        </li>
        <li>
          <nuxt-link to="/works">Works</nuxt-link>
        </li>
        <li class="spacer">&nbsp;</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    to() {
      if (this.$nuxt.context.from) {
        this.$router.go(-1);
      } else {
        this.$router.push('/works');
      }
    },
  },
};
</script>
