<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/work-done' }">
        <app-i18n code="entities.workDone.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.workDone.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workDone.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-work-done-view-toolbar
        v-if="record"
      ></app-work-done-view-toolbar>

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

        <app-view-item-text :label="fields.block.label" :value="presenter(record, 'block')"></app-view-item-text>

        <app-view-item-text :label="fields.quantity.label" :value="presenter(record, 'quantity')"></app-view-item-text>

        <app-view-item-text :label="fields.remarks.label" :value="presenter(record, 'remarks')"></app-view-item-text>

        <app-view-item-text :label="fields.amount.label" :value="presenter(record, 'amount')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import WorkDoneViewToolbar from '@/modules/work-done/components/work-done-view-toolbar.vue';
import { WorkDoneModel } from '@/modules/work-done/work-done-model';

const { fields } = WorkDoneModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-work-done-view-page',

  props: ['id'],

  components: {
    'app-work-done-view-toolbar': WorkDoneViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'workDone/view/record',
      loading: 'workDone/view/loading',
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
      doFind: 'workDone/view/doFind',
    }),

    presenter(record, fieldName) {
      return WorkDoneModel.presenter(record, fieldName);
    },
  },
});
</script>
