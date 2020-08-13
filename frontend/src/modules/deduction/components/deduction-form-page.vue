<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/deduction' }">
        <app-i18n code="entities.deduction.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="entities.deduction.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.deduction.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.deduction.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.deduction.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-deduction-form
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
import DeductionForm from '@/modules/deduction/components/deduction-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-deduction-form-page',

  props: ['id'],

  components: {
    'app-deduction-form': DeductionForm,
  },

  computed: {
    ...mapGetters({
      record: 'deduction/form/record',
      initLoading: 'deduction/form/initLoading',
      saveLoading: 'deduction/form/saveLoading',
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
      doInit: 'deduction/form/doInit',
      doUpdate: 'deduction/form/doUpdate',
      doCreate: 'deduction/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/deduction');
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
