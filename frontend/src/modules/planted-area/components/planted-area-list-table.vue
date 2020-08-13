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
        :label="fields.block.label"
        :prop="fields.block.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'block') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.plantedHa.label"
        :prop="fields.plantedHa.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'plantedHa') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.totalPalm.label"
        :prop="fields.totalPalm.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'totalPalm') }}</template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/planted-area/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/planted-area/${scope.row.id}/edit`"
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
import { PlantedAreaModel } from '@/modules/planted-area/planted-area-model';
import { mapGetters, mapActions } from 'vuex';
import { PlantedAreaPermissions } from '@/modules/planted-area/planted-area-permissions';
import { i18n } from '@/i18n';

const { fields } = PlantedAreaModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-planted-area-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'plantedArea/list/rows',
      count: 'plantedArea/list/count',
      loading: 'plantedArea/list/loading',
      pagination: 'plantedArea/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'plantedArea/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new PlantedAreaPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new PlantedAreaPermissions(
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
      doChangeSort: 'plantedArea/list/doChangeSort',
      doChangePaginationCurrentPage:
        'plantedArea/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'plantedArea/list/doChangePaginationPageSize',
      doMountTable: 'plantedArea/list/doMountTable',
      doDestroy: 'plantedArea/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return PlantedAreaModel.presenter(row, fieldName);
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
