<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/planted-area' }">
        <app-i18n code="entities.plantedArea.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.plantedArea.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.plantedArea.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-planted-area-view-toolbar
        v-if="record"
      ></app-planted-area-view-toolbar>

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

        <app-view-item-text :label="fields.plantedHa.label" :value="presenter(record, 'plantedHa')"></app-view-item-text>

        <app-view-item-text :label="fields.totalPalm.label" :value="presenter(record, 'totalPalm')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import PlantedAreaViewToolbar from '@/modules/planted-area/components/planted-area-view-toolbar.vue';
import { PlantedAreaModel } from '@/modules/planted-area/planted-area-model';

const { fields } = PlantedAreaModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-planted-area-view-page',

  props: ['id'],

  components: {
    'app-planted-area-view-toolbar': PlantedAreaViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'plantedArea/view/record',
      loading: 'plantedArea/view/loading',
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
      doFind: 'plantedArea/view/doFind',
    }),

    presenter(record, fieldName) {
      return PlantedAreaModel.presenter(record, fieldName);
    },
  },
});
</script>
