<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/f-f-bproduction' }">
        <app-i18n code="entities.fFBproduction.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.fFBproduction.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.fFBproduction.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-f-f-bproduction-view-toolbar
        v-if="record"
      ></app-f-f-bproduction-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.date.label" :value="presenter(record, 'date')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.location.label"
          :permission="fields.location.readPermission"
          :url="fields.location.viewUrl"
          :value="presenter(record, 'location')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.mill.label" :value="presenter(record, 'mill')"></app-view-item-text>

        <app-view-item-text :label="fields.block.label" :value="presenter(record, 'block')"></app-view-item-text>

        <app-view-item-text :label="fields.bunches.label" :value="presenter(record, 'bunches')"></app-view-item-text>

        <app-view-item-text :label="fields.mt.label" :value="presenter(record, 'mt')"></app-view-item-text>

        <app-view-item-text :label="fields.looseFruit.label" :value="presenter(record, 'looseFruit')"></app-view-item-text>

        <app-view-item-text :label="fields.bunchWeight.label" :value="presenter(record, 'bunchWeight')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import FFBproductionViewToolbar from '@/modules/f-f-bproduction/components/f-f-bproduction-view-toolbar.vue';
import { FFBproductionModel } from '@/modules/f-f-bproduction/f-f-bproduction-model';

const { fields } = FFBproductionModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-f-f-bproduction-view-page',

  props: ['id'],

  components: {
    'app-f-f-bproduction-view-toolbar': FFBproductionViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'fFBproduction/view/record',
      loading: 'fFBproduction/view/loading',
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
      doFind: 'fFBproduction/view/doFind',
    }),

    presenter(record, fieldName) {
      return FFBproductionModel.presenter(record, fieldName);
    },
  },
});
</script>
