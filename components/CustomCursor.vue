<template>
  <div id="cursor" :class="cursorClass">&nbsp;</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      cursorText: 'Custom Cursor',
    };
  },
  computed: {
    ...mapState({
      cursorClass: (state) => state.cursor.class,
    }),
  },
};
</script>
