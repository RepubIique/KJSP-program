<template>
  <el-form-item :label="label" v-if="!isBlank">
    <el-col :lg="11" :md="16" :sm="24">
      <router-link
        :to="urlWithId"
        v-if="hasPermissionToRead"
      >
        <strong>{{ display }}</strong>
      </router-link>
      <strong v-if="!hasPermissionToRead">
        {{ display }}
      </strong>
    </el-col>
  </el-form-item>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { PermissionChecker } from '@/modules/user/permission-checker';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-view-item-relation-to-one',

  props: ['label', 'value', 'url', 'permission'],

  computed: {
    ...mapGetters({
      currentTenant: 'auth/currentTenant',
      currentUser: 'auth/currentUser',
    }),

    hasPermissionToRead() {
      return new PermissionChecker(
        this.currentTenant,
        this.currentUser,
      ).match(this.permission);
    },

    urlWithId() {
      if (!this.value) {
        return null;
      }

      return `${this.url}/${this.value.id}`;
    },

    isBlank() {
      return !this.value || !this.value.id;
    },

    display() {
      if (!this.value) {
        return null;
      }

      return this.value.label;
    },
  },
});
</script>

<style></style>
