<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.workerRegistration.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workerRegistration.list.title"
        ></app-i18n>
      </h1>

      <app-worker-registration-list-toolbar></app-worker-registration-list-toolbar>
      <app-worker-registration-list-filter></app-worker-registration-list-filter>
      <app-worker-registration-list-table></app-worker-registration-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import WorkerRegistrationListFilter from '@/modules/worker-registration/components/worker-registration-list-filter.vue';
import WorkerRegistrationListTable from '@/modules/worker-registration/components/worker-registration-list-table.vue';
import WorkerRegistrationListToolbar from '@/modules/worker-registration/components/worker-registration-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-worker-registration-list-page',

  components: {
    'app-worker-registration-list-filter': WorkerRegistrationListFilter,
    'app-worker-registration-list-table': WorkerRegistrationListTable,
    'app-worker-registration-list-toolbar': WorkerRegistrationListToolbar,
  },
});
</script>

<style></style>
