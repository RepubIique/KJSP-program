<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.plantedArea.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.plantedArea.list.title"
        ></app-i18n>
      </h1>

      <app-planted-area-list-toolbar></app-planted-area-list-toolbar>
      <app-planted-area-list-filter></app-planted-area-list-filter>
      <app-planted-area-list-table></app-planted-area-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import PlantedAreaListFilter from '@/modules/planted-area/components/planted-area-list-filter.vue';
import PlantedAreaListTable from '@/modules/planted-area/components/planted-area-list-table.vue';
import PlantedAreaListToolbar from '@/modules/planted-area/components/planted-area-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-planted-area-list-page',

  components: {
    'app-planted-area-list-filter': PlantedAreaListFilter,
    'app-planted-area-list-table': PlantedAreaListTable,
    'app-planted-area-list-toolbar': PlantedAreaListToolbar,
  },
});
</script>

<style></style>
