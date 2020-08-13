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
          code="entities.workDone.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.workDone.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workDone.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.workDone.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-work-done-form
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
import WorkDoneForm from '@/modules/work-done/components/work-done-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-done-form-page',

  props: ['id'],

  components: {
    'app-work-done-form': WorkDoneForm,
  },

  computed: {
    ...mapGetters({
      record: 'workDone/form/record',
      initLoading: 'workDone/form/initLoading',
      saveLoading: 'workDone/form/saveLoading',
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
      doInit: 'workDone/form/doInit',
      doUpdate: 'workDone/form/doUpdate',
      doCreate: 'workDone/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/work-done');
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
