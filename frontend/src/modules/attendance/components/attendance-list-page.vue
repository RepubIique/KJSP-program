<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.attendance.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.attendance.list.title"
        ></app-i18n>
      </h1>

      <app-attendance-list-toolbar></app-attendance-list-toolbar>
      <app-attendance-list-filter></app-attendance-list-filter>
      <app-attendance-list-table></app-attendance-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import AttendanceListFilter from '@/modules/attendance/components/attendance-list-filter.vue';
import AttendanceListTable from '@/modules/attendance/components/attendance-list-table.vue';
import AttendanceListToolbar from '@/modules/attendance/components/attendance-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-attendance-list-page',

  components: {
    'app-attendance-list-filter': AttendanceListFilter,
    'app-attendance-list-table': AttendanceListTable,
    'app-attendance-list-toolbar': AttendanceListToolbar,
  },
});
</script>

<style></style>
