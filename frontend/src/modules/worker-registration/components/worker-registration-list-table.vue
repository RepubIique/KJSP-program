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
        :label="fields.name.label"
        :prop="fields.name.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'name') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.designation.label"
        :prop="fields.designation.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'designation') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.passport.label"
        :prop="fields.passport.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'passport') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.permitExpiryDate.label"
        :prop="fields.permitExpiryDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'permitExpiryDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.dateEmployed.label"
        :prop="fields.dateEmployed.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'dateEmployed') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.gang.label"
        :prop="fields.gang.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'gang') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.superiorName.label"
        :prop="fields.superiorName.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'superiorName') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.dob.label"
        :prop="fields.dob.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'dob') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.age.label"
        :prop="fields.age.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'age') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.gender.label"
        :prop="fields.gender.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'gender') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.placeOfBirth.label"
        :prop="fields.placeOfBirth.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'placeOfBirth') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.nationality.label"
        :prop="fields.nationality.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'nationality') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.religion.label"
        :prop="fields.religion.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'religion') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.race.label"
        :prop="fields.race.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'race') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.maritalStatus.label"
        :prop="fields.maritalStatus.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'maritalStatus') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.spouse.label"
        :prop="fields.spouse.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'spouse') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.children.label"
        :prop="fields.children.name"
        sortable="custom"
        align="right"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'children') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.bank.label"
        :prop="fields.bank.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'bank') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.bankNo.label"
        :prop="fields.bankNo.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'bankNo') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.socso.label"
        :prop="fields.socso.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'socso') }}</template>
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
        :label="fields.status.label"
        :prop="fields.status.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'status') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.image.label"
        :prop="fields.image.name"
        align="center"
      >
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'image')"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column
        :fixed="isMobile ? undefined : 'right'"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/worker-registration/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/worker-registration/${scope.row.id}/edit`"
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
import { WorkerRegistrationModel } from '@/modules/worker-registration/worker-registration-model';
import { mapGetters, mapActions } from 'vuex';
import { WorkerRegistrationPermissions } from '@/modules/worker-registration/worker-registration-permissions';
import { i18n } from '@/i18n';

const { fields } = WorkerRegistrationModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-worker-registration-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'workerRegistration/list/rows',
      count: 'workerRegistration/list/count',
      loading: 'workerRegistration/list/loading',
      pagination: 'workerRegistration/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      destroyLoading: 'workerRegistration/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new WorkerRegistrationPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToDestroy() {
      return new WorkerRegistrationPermissions(
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
      doChangeSort: 'workerRegistration/list/doChangeSort',
      doChangePaginationCurrentPage:
        'workerRegistration/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'workerRegistration/list/doChangePaginationPageSize',
      doMountTable: 'workerRegistration/list/doMountTable',
      doDestroy: 'workerRegistration/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return WorkerRegistrationModel.presenter(row, fieldName);
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
