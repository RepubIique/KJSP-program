<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/ffb' }">
        <app-i18n code="entities.ffb.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.ffb.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.ffb.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-ffb-view-toolbar
        v-if="record"
      ></app-ffb-view-toolbar>

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

        <app-view-item-text :label="fields.block.label" :value="presenter(record, 'block')"></app-view-item-text>

        <app-view-item-text :label="fields.budget.label" :value="presenter(record, 'budget')"></app-view-item-text>

        <app-view-item-text :label="fields.date.label" :value="presenter(record, 'date')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import FfbViewToolbar from '@/modules/ffb/components/ffb-view-toolbar.vue';
import { FfbModel } from '@/modules/ffb/ffb-model';

const { fields } = FfbModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-ffb-view-page',

  props: ['id'],

  components: {
    'app-ffb-view-toolbar': FfbViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'ffb/view/record',
      loading: 'ffb/view/loading',
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
      doFind: 'ffb/view/doFind',
    }),

    presenter(record, fieldName) {
      return FfbModel.presenter(record, fieldName);
    },
  },
});
</script>
