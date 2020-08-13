<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: '/tenant/new' }">
      <el-button icon="el-icon-fa-plus" type="primary">
        <app-i18n code="common.new"></app-i18n>
      </el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'app-tenant-list-toolbar',
});
</script>

<style></style>
