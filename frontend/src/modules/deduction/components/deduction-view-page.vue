<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/deduction' }">
        <app-i18n code="entities.deduction.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.deduction.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.deduction.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-deduction-view-toolbar
        v-if="record"
      ></app-deduction-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-relation-to-one
          :label="fields.worker.label"
          :permission="fields.worker.readPermission"
          :url="fields.worker.viewUrl"
          :value="presenter(record, 'worker')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.bf.label" :value="presenter(record, 'bf')"></app-view-item-text>

        <app-view-item-text :label="fields.credit.label" :value="presenter(record, 'credit')"></app-view-item-text>

        <app-view-item-text :label="fields.deduction.label" :value="presenter(record, 'deduction')"></app-view-item-text>

        <app-view-item-text :label="fields.cf.label" :value="presenter(record, 'cf')"></app-view-item-text>

        <app-view-item-text :label="fields.date.label" :value="presenter(record, 'date')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.location.label"
          :permission="fields.location.readPermission"
          :url="fields.location.viewUrl"
          :value="presenter(record, 'location')"
        ></app-view-item-relation-to-one>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import DeductionViewToolbar from '@/modules/deduction/components/deduction-view-toolbar.vue';
import { DeductionModel } from '@/modules/deduction/deduction-model';

const { fields } = DeductionModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-deduction-view-page',

  props: ['id'],

  components: {
    'app-deduction-view-toolbar': DeductionViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'deduction/view/record',
      loading: 'deduction/view/loading',
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
      doFind: 'deduction/view/doFind',
    }),

    presenter(record, fieldName) {
      return DeductionModel.presenter(record, fieldName);
    },
  },
});
</script>
