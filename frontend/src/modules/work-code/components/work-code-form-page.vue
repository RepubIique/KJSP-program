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
          code="entities.workCode.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.workCode.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.workCode.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.workCode.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-work-code-form
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
import WorkCodeForm from '@/modules/work-code/components/work-code-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-code-form-page',

  props: ['id'],

  components: {
    'app-work-code-form': WorkCodeForm,
  },

  computed: {
    ...mapGetters({
      record: 'workCode/form/record',
      initLoading: 'workCode/form/initLoading',
      saveLoading: 'workCode/form/saveLoading',
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
      doInit: 'workCode/form/doInit',
      doUpdate: 'workCode/form/doUpdate',
      doCreate: 'workCode/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/work-code');
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
