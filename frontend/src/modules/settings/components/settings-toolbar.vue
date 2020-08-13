<template>
  <div class="app-page-toolbar">
    <router-link
      :to="{
        path: '/audit-logs',
        query: { entityNames: 'settings' },
      }"
      v-if="hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters } from 'vuex';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-settings-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },
  },
});
</script>

<style></style>
