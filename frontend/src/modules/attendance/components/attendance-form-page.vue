<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/attendance' }">
        <app-i18n code="entities.attendance.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.attendance.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.attendance.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.attendance.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.attendance.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-attendance-form
        :isEditing="isEditing"
        :record="record"
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
        v-if="!initLoading"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import AttendanceForm from '@/modules/attendance/components/attendance-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-attendance-form-page',

  props: ['id'],

  components: {
    'app-attendance-form': AttendanceForm,
  },

  computed: {
    ...mapGetters({
      record: 'attendance/form/record',
      initLoading: 'attendance/form/initLoading',
      saveLoading: 'attendance/form/saveLoading',
    }),

    isEditing() {
      return Boolean(this.id);
    },
  },

  async created() {
    await this.doInit(this.id);
  },

  methods: {
    ...mapActions({
      doInit: 'attendance/form/doInit',
      doUpdate: 'attendance/form/doUpdate',
      doCreate: 'attendance/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/attendance');
    },

    async doSubmit(payload) {
      if (this.isEditing) {
        return this.doUpdate(payload);
      } else {
        return this.doCreate(payload.values);
      }
    },
  },
});
</script>

<style></style>
