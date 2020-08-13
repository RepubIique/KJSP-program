<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column
        type="selection"
        width="55"
      ></el-table-column>

      <el-table-column :label="fields.location.label" :prop="fields.location.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.location.label"
            :permission="fields.location.readPermission"
            :url="fields.location.viewUrl"
            :value="presenter(scope.row, 'location')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.date.label"
        :prop="fields.date.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'date') }}</template>
      </el-table-column>

      <el-table-column :label="fields.worker.label" :prop="fields.worker.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.worker.label"
            :permission="fields.worker.readPermission"
            :url="fields.worker.viewUrl"
            :value="presenter(scope.row, 'worker')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.type.label"
        :prop="fields.type.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'type') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.hours.label"
        :prop="fields.hours.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'hours') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.totalHours.label"
        :prop="fields.totalHours.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'totalHours') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.overTime.label"
        :prop="fields.overTime.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'overTime') }}</template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/attendance/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/attendance/${scope.row.id}/edit`"
              v-if="hasPermissionToEdit"
            >
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { AttendanceModel } from '@/modules/attendance/attendance-model';
import { mapGetters, mapActions } from 'vuex';
import { AttendancePermissions } from '@/modules/attendance/attendance-permissions';
import { i18n } from '@/i18n';

const { fields } = AttendanceModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-attendance-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'attendance/list/rows',
      count: 'attendance/list/count',
      loading: 'attendance/list/loading',
      pagination: 'attendance/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'attendance/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new AttendancePermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new AttendancePermissions(
        this.currentTenant,
        this.currentUser,
      ).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'attendance/list/doChangeSort',
      doChangePaginationCurrentPage:
        'attendance/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'attendance/list/doChangePaginationPageSize',
      doMountTable: 'attendance/list/doMountTable',
      doDestroy: 'attendance/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return AttendanceModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
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

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
});
</script>

<style></style>
