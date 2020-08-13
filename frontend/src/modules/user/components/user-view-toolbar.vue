<template>
  <div class="app-page-toolbar">
    <router-link
      :to="{ path: `/user/${record.id}/edit` }"
      v-if="record && hasPermissionToEdit"
    >
      <el-button icon="el-icon-fa-edit" type="primary">
        <app-i18n code="common.edit"></app-i18n>
      </el-button>
    </router-link>

    <router-link
      :to="{
        path: '/audit-logs',
        query: { entityId: record.id },
      }"
      v-if="record && hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>

    <router-link
      :to="{
        path: '/audit-logs',
        query: { createdByEmail: record.email },
      }"
      v-if="record && hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-eye">
        <app-i18n code="user.view.activity"></app-i18n>
      </el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { UserPermissions } from '@/modules/user/user-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters } from 'vuex';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-view-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      record: 'user/view/record',
      loading: 'user/view/loading',
    }),

    hasPermissionToEdit() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

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
