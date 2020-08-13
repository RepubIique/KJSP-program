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
        :label="fields.date.label"
        :prop="fields.date.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'date') }}</template>
      </el-table-column>

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
        :label="fields.mill.label"
        :prop="fields.mill.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'mill') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.block.label"
        :prop="fields.block.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'block') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.bunches.label"
        :prop="fields.bunches.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'bunches') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.mt.label"
        :prop="fields.mt.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'mt') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.looseFruit.label"
        :prop="fields.looseFruit.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'looseFruit') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.bunchWeight.label"
        :prop="fields.bunchWeight.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'bunchWeight') }}</template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/f-f-bproduction/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/f-f-bproduction/${scope.row.id}/edit`"
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
import { FFBproductionModel } from '@/modules/f-f-bproduction/f-f-bproduction-model';
import { mapGetters, mapActions } from 'vuex';
import { FFBproductionPermissions } from '@/modules/f-f-bproduction/f-f-bproduction-permissions';
import { i18n } from '@/i18n';

const { fields } = FFBproductionModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-f-f-bproduction-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'fFBproduction/list/rows',
      count: 'fFBproduction/list/count',
      loading: 'fFBproduction/list/loading',
      pagination: 'fFBproduction/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'fFBproduction/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new FFBproductionPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new FFBproductionPermissions(
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
      doChangeSort: 'fFBproduction/list/doChangeSort',
      doChangePaginationCurrentPage:
        'fFBproduction/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'fFBproduction/list/doChangePaginationPageSize',
      doMountTable: 'fFBproduction/list/doMountTable',
      doDestroy: 'fFBproduction/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return FFBproductionModel.presenter(row, fieldName);
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
