<template>
  <div class="app-page-toolbar">
    <router-link
      :to="{ path: '/work-code/new' }"
      v-if="hasPermissionToCreate"
    >
      <el-button icon="el-icon-fa-plus" type="primary">
        <app-i18n code="common.new"></app-i18n>
      </el-button>
    </router-link>

    <router-link
      :to="{ path: '/work-code/import' }"
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
          @click="doDestroyAllWithConfirm"
          icon="el-icon-fa-trash"
          type="primary"
        >
          <app-i18n code="common.destroy"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>

    <router-link
      :to="{
        path: '/audit-logs',
        query: { entityNames: 'workCode' },
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
import { WorkCodePermissions } from '@/modules/work-code/work-code-permissions';
import { i18n } from '@/i18n';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-code-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      hasRows: 'workCode/list/hasRows',
      loading: 'workCode/list/loading',
      exportLoading: 'workCode/list/exportLoading',
      selectedRows: 'workCode/list/selectedRows',
      destroyLoading: 'workCode/destroy/loading',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },

    hasPermissionToCreate() {
      return new WorkCodePermissions(
        this.currentTenant,
        this.currentUser,
      ).create;
    },

    hasPermissionToEdit() {
      return new WorkCodePermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToImport() {
      return new WorkCodePermissions(
        this.currentTenant,
        this.currentUser,
      ).import;
    },

    hasPermissionToDestroy() {
      return new WorkCodePermissions(
        this.currentTenant,
        this.currentUser,
      ).destroy;
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

    removeButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    removeButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    enableButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    enableButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    disableButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    disableButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    destroyButtonDisabled() {
      return (
        !this.selectedRows.length ||
        this.loading ||
        this.destroyLoading
      );
    },

    destroyButtonTooltip() {
      if (!this.selectedRows.length || this.loading) {
        return i18n('common.mustSelectARow');
      }

      return null;
    },
  },

  methods: {
    ...mapActions({
      doExport: 'workCode/list/doExport',
      doRemoveAllSelected:
        'workCode/list/doRemoveAllSelected',
      doDisableAllSelected:
        'workCode/list/doDisableAllSelected',
      doEnableAllSelected:
        'workCode/list/doEnableAllSelected',
      doDestroyAll: 'workCode/destroy/doDestroyAll',
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
