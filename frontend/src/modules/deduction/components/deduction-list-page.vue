<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.deduction.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.deduction.list.title"
        ></app-i18n>
      </h1>

      <app-deduction-list-toolbar></app-deduction-list-toolbar>
      <app-deduction-list-filter></app-deduction-list-filter>
      <app-deduction-list-table></app-deduction-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import DeductionListFilter from '@/modules/deduction/components/deduction-list-filter.vue';
import DeductionListTable from '@/modules/deduction/components/deduction-list-table.vue';
import DeductionListToolbar from '@/modules/deduction/components/deduction-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-deduction-list-page',

  components: {
    'app-deduction-list-filter': DeductionListFilter,
    'app-deduction-list-table': DeductionListTable,
    'app-deduction-list-toolbar': DeductionListToolbar,
  },
});
</script>

<style></style>
