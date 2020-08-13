<template>
  <div v-if="!isBlank">
    <div :key="item.id" v-for="item in value">
      <a
        :href="item.downloadUrl"
        download
        target="_blank"
        >{{ truncate(item.name) }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import truncate from 'lodash/truncate';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-list-item-file',

  props: ['value'],

  computed: {
    isBlank() {
      return !this.value || !this.value.length;
    },
  },

  methods: {
    truncate(name) {
      return truncate(name);
    },
  },
});
</script>

<style></style>
