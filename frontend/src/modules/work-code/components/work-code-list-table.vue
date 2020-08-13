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

      <el-table-column
        :label="fields.category.label"
        :prop="fields.category.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'category') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.type.label"
        :prop="fields.type.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'type') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.description.label"
        :prop="fields.description.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'description') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.uom.label"
        :prop="fields.uom.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'uom') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.rate.label"
        :prop="fields.rate.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'rate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.remarks.label"
        :prop="fields.remarks.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'remarks') }}</template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/work-code/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/work-code/${scope.row.id}/edit`"
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
import { WorkCodeModel } from '@/modules/work-code/work-code-model';
import { mapGetters, mapActions } from 'vuex';
import { WorkCodePermissions } from '@/modules/work-code/work-code-permissions';
import { i18n } from '@/i18n';

const { fields } = WorkCodeModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-code-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'workCode/list/rows',
      count: 'workCode/list/count',
      loading: 'workCode/list/loading',
      pagination: 'workCode/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'workCode/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new WorkCodePermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new WorkCodePermissions(
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
      doChangeSort: 'workCode/list/doChangeSort',
      doChangePaginationCurrentPage:
        'workCode/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'workCode/list/doChangePaginationPageSize',
      doMountTable: 'workCode/list/doMountTable',
      doDestroy: 'workCode/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return WorkCodeModel.presenter(row, fieldName);
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
