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
          code="entities.fFBproduction.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.fFBproduction.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.fFBproduction.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.fFBproduction.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-f-f-bproduction-form
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
import FFBproductionForm from '@/modules/f-f-bproduction/components/f-f-bproduction-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-f-f-bproduction-form-page',

  props: ['id'],

  components: {
    'app-f-f-bproduction-form': FFBproductionForm,
  },

  computed: {
    ...mapGetters({
      record: 'fFBproduction/form/record',
      initLoading: 'fFBproduction/form/initLoading',
      saveLoading: 'fFBproduction/form/saveLoading',
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
      doInit: 'fFBproduction/form/doInit',
      doUpdate: 'fFBproduction/form/doUpdate',
      doCreate: 'fFBproduction/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/f-f-bproduction');
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
