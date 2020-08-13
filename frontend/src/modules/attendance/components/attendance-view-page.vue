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
          code="entities.attendance.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.attendance.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-attendance-view-toolbar
        v-if="record"
      ></app-attendance-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-relation-to-one
          :label="fields.location.label"
          :permission="fields.location.readPermission"
          :url="fields.location.viewUrl"
          :value="presenter(record, 'location')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.date.label" :value="presenter(record, 'date')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.worker.label"
          :permission="fields.worker.readPermission"
          :url="fields.worker.viewUrl"
          :value="presenter(record, 'worker')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.type.label" :value="presenter(record, 'type')"></app-view-item-text>

        <app-view-item-text :label="fields.hours.label" :value="presenter(record, 'hours')"></app-view-item-text>

        <app-view-item-text :label="fields.totalHours.label" :value="presenter(record, 'totalHours')"></app-view-item-text>

        <app-view-item-text :label="fields.overTime.label" :value="presenter(record, 'overTime')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import AttendanceViewToolbar from '@/modules/attendance/components/attendance-view-toolbar.vue';
import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-attendance-view-page',

  props: ['id'],

  components: {
    'app-attendance-view-toolbar': AttendanceViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'attendance/view/record',
      loading: 'attendance/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'attendance/view/doFind',
    }),

    presenter(record, fieldName) {
      return AttendanceModel.presenter(record, fieldName);
    },
  },
});
</script>
