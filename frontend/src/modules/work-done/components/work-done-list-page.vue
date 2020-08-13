<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.workDone.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workDone.list.title"
        ></app-i18n>
      </h1>

      <app-work-done-list-toolbar></app-work-done-list-toolbar>
      <app-work-done-list-filter></app-work-done-list-filter>
      <app-work-done-list-table></app-work-done-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import WorkDoneListFilter from '@/modules/work-done/components/work-done-list-filter.vue';
import WorkDoneListTable from '@/modules/work-done/components/work-done-list-table.vue';
import WorkDoneListToolbar from '@/modules/work-done/components/work-done-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-done-list-page',

  components: {
    'app-work-done-list-filter': WorkDoneListFilter,
    'app-work-done-list-table': WorkDoneListTable,
    'app-work-done-list-toolbar': WorkDoneListToolbar,
  },
});
</script>

<style></style>
