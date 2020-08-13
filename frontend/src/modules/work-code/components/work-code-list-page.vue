<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.workCode.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workCode.list.title"
        ></app-i18n>
      </h1>

      <app-work-code-list-toolbar></app-work-code-list-toolbar>
      <app-work-code-list-filter></app-work-code-list-filter>
      <app-work-code-list-table></app-work-code-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import WorkCodeListFilter from '@/modules/work-code/components/work-code-list-filter.vue';
import WorkCodeListTable from '@/modules/work-code/components/work-code-list-table.vue';
import WorkCodeListToolbar from '@/modules/work-code/components/work-code-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-code-list-page',

  components: {
    'app-work-code-list-filter': WorkCodeListFilter,
    'app-work-code-list-table': WorkCodeListTable,
    'app-work-code-list-toolbar': WorkCodeListToolbar,
  },
});
</script>

<style></style>
