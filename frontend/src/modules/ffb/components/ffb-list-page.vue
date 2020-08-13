<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.ffb.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.ffb.list.title"
        ></app-i18n>
      </h1>

      <app-ffb-list-toolbar></app-ffb-list-toolbar>
      <app-ffb-list-filter></app-ffb-list-filter>
      <app-ffb-list-table></app-ffb-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import FfbListFilter from '@/modules/ffb/components/ffb-list-filter.vue';
import FfbListTable from '@/modules/ffb/components/ffb-list-table.vue';
import FfbListToolbar from '@/modules/ffb/components/ffb-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-ffb-list-page',

  components: {
    'app-ffb-list-filter': FfbListFilter,
    'app-ffb-list-table': FfbListTable,
    'app-ffb-list-toolbar': FfbListToolbar,
  },
});
</script>

<style></style>
