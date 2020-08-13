<template>
  <div class="app-page-toolbar">
    <router-link
      :to="{ path: '/user/new' }"
      v-if="hasPermissionToCreate"
    >
      <el-button icon="el-icon-fa-envelope" type="primary">
        <app-i18n code="user.invite"></app-i18n>
      </el-button>
    </router-link>

    <router-link
      :to="{ path: '/user/import' }"
      v-if="hasPermissionToImport"
    >
      <el-button icon="el-icon-fa-upload" type="primary">
        <app-i18n code="common.import"></app-i18n>
      </el-button>
    </router-link>

    <el-tooltip
      :content="destroyButtonTooltip"
      :disabled="!destroyButtonTooltip"
      v-if="hasPermissionToDestroy"
    >
      <span>
        <el-button
          :disabled="destroyButtonDisabled"
          @click="doDestroyAllWithConfirm()"
          icon="el-icon-fa-times"
          type="primary"
        >
          <app-i18n code="common.destroy"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>

    <router-link
      :to="{
        path: '/audit-logs',
        query: { entityNames: 'user' },
      }"
      v-if="hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>

    <el-tooltip
      :content="exportButtonTooltip"
      :disabled="!exportButtonTooltip"
    >
      <span>
        <el-button
          :disabled="exportButtonDisabled"
          @click="doExport()"
          icon="el-icon-fa-file-excel-o"
        >
          <app-i18n code="common.export"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { UserPermissions } from '@/modules/user/user-permissions';
import { i18n } from '@/i18n';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      hasRows: 'user/list/hasRows',
      loading: 'user/list/loading',
      exportLoading: 'user/list/exportLoading',
      selectedRows: 'user/list/selectedRows',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },

    hasPermissionToCreate() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).create;
    },

    hasPermissionToEdit() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).destroy;
    },

    hasPermissionToImport() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).import;
    },

    exportButtonDisabled() {
      return (
        !this.hasRows || this.loading || this.exportLoading
      );
    },

    exportButtonTooltip() {
      return !this.hasRows
        ? i18n('common.noDataToExport')
        : null;
    },

    destroyButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    destroyButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },
  },

  methods: {
    ...mapActions({
      doExport: 'user/list/doExport',
      doDestroyAll: 'user/destroy/doDestroyAll',
    }),

    async doDestroyAllWithConfirm() {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroyAll(
          this.selectedRows.map((item) => item.id),
        );
      } catch (error) {
        // no
      }
    },
  },
});
</script>

<style></style>
