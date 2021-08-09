<template>
  <div id="header">
    <nav>
      <ul class="menu">
        <li class="nav-link-info">
          <nuxt-link v-if="$route.name != 'info'" to="/info">
            Eli Horn
          </nuxt-link>
          <span v-else class="link close exact-active" @click="to">
            Eli Horn
          </span>
        </li>
        <li class="nav-link-works">
          <nuxt-link
            :class="{ 'nuxt-link-active': $route.name == 'index' }"
            to="/works"
          >
            Selected work
          </nuxt-link>
        </li>
        <!-- <li class="nav-link-index">
          <nuxt-link to="/index">Index</nuxt-link>
        </li> -->
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
