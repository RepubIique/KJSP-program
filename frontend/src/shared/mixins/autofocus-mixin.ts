import Vue from 'vue';

export default Vue.extend({
  mounted() {
    if (this.$refs.focus) {
      (this.$refs.focus as any).focus();
    }
  },
});
