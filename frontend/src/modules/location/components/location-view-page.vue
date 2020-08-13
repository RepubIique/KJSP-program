<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/location' }">
        <app-i18n code="entities.location.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.location.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.location.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-location-view-toolbar
        v-if="record"
      ></app-location-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.location.label" :value="presenter(record, 'location')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import LocationViewToolbar from '@/modules/location/components/location-view-toolbar.vue';
import { LocationModel } from '@/modules/location/location-model';

const { fields } = LocationModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-location-view-page',

  props: ['id'],

  components: {
    'app-location-view-toolbar': LocationViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'location/view/record',
      loading: 'location/view/loading',
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
      doFind: 'location/view/doFind',
    }),

    presenter(record, fieldName) {
      return LocationModel.presenter(record, fieldName);
    },
  },
});
</script>
