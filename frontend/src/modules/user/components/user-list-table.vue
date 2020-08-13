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
        :label="fields.avatars.label"
        :prop="fields.avatars.name"
        align="center"
        width="70px"
      >
        <template slot-scope="scope">
          <app-list-item-image
            :value="presenter(scope.row, 'avatars')"
          ></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.email.label"
        :prop="fields.email.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          {{ presenter(scope.row, 'email') }}
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.fullName.label"
        :prop="fields.fullName.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          {{ presenter(scope.row, 'fullName') }}
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.roles.label"
        :prop="fields.roles.name"
      >
        <template slot-scope="scope">
          <div
            :key="roleId"
            v-for="roleId in scope.row.roles"
          >
            <el-tooltip
              :content="roleDescriptionOf(roleId)"
            >
              <span>{{ roleLabelOf(roleId) }}</span>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        :label="fields.status.label"
        :prop="fields.status.name"
        sortable="custom"
      >
        <template slot-scope="scope">
          <el-tag
            :type="
              scope.row[fields.status.name] === 'invited'
                ? 'warning'
                : scope.row[fields.status.name] ===
                  'empty-permissions'
                ? 'danger'
                : 'success'
            "
          >
            {{ presenter(scope.row, 'status') }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="120"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/user/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/user/${scope.row.id}/edit`"
              v-if="hasPermissionToEdit"
            >
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
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
import { UserModel } from '@/modules/user/user-model';
import { mapGetters, mapActions } from 'vuex';
import { UserPermissions } from '@/modules/user/user-permissions';
import Roles from '@/security/roles';
import { i18n } from '../../../i18n';

const { fields } = UserModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'user/list/rows',
      count: 'user/list/count',
      loading: 'user/list/loading',
      pagination: 'user/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToDestroy() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).destroy;
    },

    hasPermissionToEdit() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'user/list/doChangeSort',
      doChangePaginationCurrentPage:
        'user/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'user/list/doChangePaginationPageSize',
      doMountTable: 'user/list/doMountTable',
      doDestroy: 'user/destroy/doDestroy',
    }),

    roleDescriptionOf(roleId) {
      return Roles.descriptionOf(roleId);
    },

    roleLabelOf(roleId) {
      return Roles.labelOf(roleId);
    },

    presenter(row, fieldName) {
      return UserModel.presenter(row, fieldName);
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
