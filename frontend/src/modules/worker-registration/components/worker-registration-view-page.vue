<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/worker-registration' }">
        <app-i18n code="entities.workerRegistration.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.workerRegistration.view.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workerRegistration.view.title"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="loading"
        v-loading="loading"
      ></div>

      <app-worker-registration-view-toolbar
        v-if="record"
      ></app-worker-registration-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.name.label" :value="presenter(record, 'name')"></app-view-item-text>

        <app-view-item-text :label="fields.designation.label" :value="presenter(record, 'designation')"></app-view-item-text>

        <app-view-item-text :label="fields.passport.label" :value="presenter(record, 'passport')"></app-view-item-text>

        <app-view-item-text :label="fields.permitExpiryDate.label" :value="presenter(record, 'permitExpiryDate')"></app-view-item-text>

        <app-view-item-text :label="fields.dateEmployed.label" :value="presenter(record, 'dateEmployed')"></app-view-item-text>

        <app-view-item-text :label="fields.gang.label" :value="presenter(record, 'gang')"></app-view-item-text>

        <app-view-item-text :label="fields.superiorName.label" :value="presenter(record, 'superiorName')"></app-view-item-text>

        <app-view-item-text :label="fields.dob.label" :value="presenter(record, 'dob')"></app-view-item-text>

        <app-view-item-text :label="fields.age.label" :value="presenter(record, 'age')"></app-view-item-text>

        <app-view-item-text :label="fields.gender.label" :value="presenter(record, 'gender')"></app-view-item-text>

        <app-view-item-text :label="fields.placeOfBirth.label" :value="presenter(record, 'placeOfBirth')"></app-view-item-text>

        <app-view-item-text :label="fields.nationality.label" :value="presenter(record, 'nationality')"></app-view-item-text>

        <app-view-item-text :label="fields.religion.label" :value="presenter(record, 'religion')"></app-view-item-text>

        <app-view-item-text :label="fields.race.label" :value="presenter(record, 'race')"></app-view-item-text>

        <app-view-item-text :label="fields.maritalStatus.label" :value="presenter(record, 'maritalStatus')"></app-view-item-text>

        <app-view-item-text :label="fields.spouse.label" :value="presenter(record, 'spouse')"></app-view-item-text>

        <app-view-item-text :label="fields.children.label" :value="presenter(record, 'children')"></app-view-item-text>

        <app-view-item-text :label="fields.bank.label" :value="presenter(record, 'bank')"></app-view-item-text>

        <app-view-item-text :label="fields.bankNo.label" :value="presenter(record, 'bankNo')"></app-view-item-text>

        <app-view-item-text :label="fields.socso.label" :value="presenter(record, 'socso')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.location.label"
          :permission="fields.location.readPermission"
          :url="fields.location.viewUrl"
          :value="presenter(record, 'location')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.status.label" :value="presenter(record, 'status')"></app-view-item-text>

        <app-view-item-image :label="fields.image.label" :value="presenter(record, 'image')"></app-view-item-image>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import WorkerRegistrationViewToolbar from '@/modules/worker-registration/components/worker-registration-view-toolbar.vue';
import { WorkerRegistrationModel } from '@/modules/worker-registration/worker-registration-model';

const { fields } = WorkerRegistrationModel;

import Vue from 'vue';

export default Vue.extend({
  name: 'app-worker-registration-view-page',

  props: ['id'],

  components: {
    'app-worker-registration-view-toolbar': WorkerRegistrationViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'workerRegistration/view/record',
      loading: 'workerRegistration/view/loading',
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
      doFind: 'workerRegistration/view/doFind',
    }),

    presenter(record, fieldName) {
      return WorkerRegistrationModel.presenter(record, fieldName);
    },
  },
});
</script>
