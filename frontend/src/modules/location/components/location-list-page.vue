<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.location.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.location.list.title"
        ></app-i18n>
      </h1>

      <app-location-list-toolbar></app-location-list-toolbar>
      <app-location-list-filter></app-location-list-filter>
      <app-location-list-table></app-location-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import LocationListFilter from '@/modules/location/components/location-list-filter.vue';
import LocationListTable from '@/modules/location/components/location-list-table.vue';
import LocationListToolbar from '@/modules/location/components/location-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-location-list-page',

  components: {
    'app-location-list-filter': LocationListFilter,
    'app-location-list-table': LocationListTable,
    'app-location-list-toolbar': LocationListToolbar,
  },
});
</script>

<style></style>
