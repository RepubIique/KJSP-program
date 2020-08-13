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
          code="entities.workerRegistration.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.workerRegistration.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workerRegistration.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.workerRegistration.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-worker-registration-form
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
import WorkerRegistrationForm from '@/modules/worker-registration/components/worker-registration-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-worker-registration-form-page',

  props: ['id'],

  components: {
    'app-worker-registration-form': WorkerRegistrationForm,
  },

  computed: {
    ...mapGetters({
      record: 'workerRegistration/form/record',
      initLoading: 'workerRegistration/form/initLoading',
      saveLoading: 'workerRegistration/form/saveLoading',
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
      doInit: 'workerRegistration/form/doInit',
      doUpdate: 'workerRegistration/form/doUpdate',
      doCreate: 'workerRegistration/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/worker-registration');
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
