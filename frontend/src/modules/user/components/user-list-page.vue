<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="user.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="user.title"></app-i18n>
      </h1>

      <app-user-list-toolbar></app-user-list-toolbar>
      <app-user-list-filter></app-user-list-filter>
      <app-user-list-table></app-user-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import UserListFilter from '@/modules/user/components/user-list-filter.vue';
import UserListTable from '@/modules/user/components/user-list-table.vue';
import UserListToolbar from '@/modules/user/components/user-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-list-page',

  components: {
    'app-user-list-filter': UserListFilter,
    'app-user-list-table': UserListTable,
    'app-user-list-toolbar': UserListToolbar,
  },
});
</script>

<style></style>
