<template>
  <div>
    <div class="app-content-page" style="margin-top: 0;">
      <h1 class="app-content-title">
        <app-i18n code="tenant.list.title"></app-i18n>
      </h1>

      <app-tenant-list-toolbar></app-tenant-list-toolbar>
      <app-tenant-list-table></app-tenant-list-table>
    </div>
  </div>
</template>

<script lang="ts">
import TenantListTable from '@/modules/tenant/components/tenant-list-table.vue';
import TenantListToolbar from '@/modules/tenant/components/tenant-list-toolbar.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-tenant-list-page',

  components: {
    'app-tenant-list-table': TenantListTable,
    'app-tenant-list-toolbar': TenantListToolbar,
  },
});
</script>

<style></style>
