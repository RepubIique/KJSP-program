<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.fFBproduction.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.fFBproduction.list.title"
        ></app-i18n>
      </h1>

      <app-f-f-bproduction-list-toolbar></app-f-f-bproduction-list-toolbar>
      <app-f-f-bproduction-list-filter></app-f-f-bproduction-list-filter>
      <app-f-f-bproduction-list-table></app-f-f-bproduction-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import FFBproductionListFilter from '@/modules/f-f-bproduction/components/f-f-bproduction-list-filter.vue';
import FFBproductionListTable from '@/modules/f-f-bproduction/components/f-f-bproduction-list-table.vue';
import FFBproductionListToolbar from '@/modules/f-f-bproduction/components/f-f-bproduction-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-f-f-bproduction-list-page',

  components: {
    'app-f-f-bproduction-list-filter': FFBproductionListFilter,
    'app-f-f-bproduction-list-table': FFBproductionListTable,
    'app-f-f-bproduction-list-toolbar': FFBproductionListToolbar,
  },
});
</script>

<style></style>
