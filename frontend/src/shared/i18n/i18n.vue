<template>
  <span v-html="message"></span>
</template>

<script lang="ts">
import { i18n } from '@/i18n';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-i18n',
  props: ['code', 'args'],
  computed: {
    message: function () {
      return i18n(this.code, ...(this.args || []));
    },
  },
});
</script>

<style></style>
