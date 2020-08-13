<template>
  <div v-if="!isBlank">
    <app-list-item-relation-to-one
      :key="item.id"
      :permission="permission"
      :url="url"
      :value="item"
      v-for="item of value"
    ></app-list-item-relation-to-one>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'app-list-item-relation-to-many',

  props: ['value', 'url', 'permission'],

  computed: {
    isBlank() {
      return !this.value || !this.value.length;
    },
  },
});
</script>

<style></style>
