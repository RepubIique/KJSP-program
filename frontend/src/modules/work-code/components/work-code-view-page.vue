<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/work-code' }">
        <app-i18n code="entities.workCode.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.workCode.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workCode.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-work-code-view-toolbar
        v-if="record"
      ></app-work-code-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.category.label" :value="presenter(record, 'category')"></app-view-item-text>

        <app-view-item-text :label="fields.type.label" :value="presenter(record, 'type')"></app-view-item-text>

        <app-view-item-text :label="fields.description.label" :value="presenter(record, 'description')"></app-view-item-text>

        <app-view-item-text :label="fields.uom.label" :value="presenter(record, 'uom')"></app-view-item-text>

        <app-view-item-text :label="fields.rate.label" :value="presenter(record, 'rate')"></app-view-item-text>

        <app-view-item-text :label="fields.remarks.label" :value="presenter(record, 'remarks')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import WorkCodeViewToolbar from '@/modules/work-code/components/work-code-view-toolbar.vue';
import { WorkCodeModel } from '@/modules/work-code/work-code-model';

const { fields } = WorkCodeModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-work-code-view-page',

  props: ['id'],

  components: {
    'app-work-code-view-toolbar': WorkCodeViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'workCode/view/record',
      loading: 'workCode/view/loading',
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
      doFind: 'workCode/view/doFind',
    }),

    presenter(record, fieldName) {
      return WorkCodeModel.presenter(record, fieldName);
    },
  },
});
</script>
