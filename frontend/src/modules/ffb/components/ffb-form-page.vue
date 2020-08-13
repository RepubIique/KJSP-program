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
          code="entities.ffb.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.ffb.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.ffb.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.ffb.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-ffb-form
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
import FfbForm from '@/modules/ffb/components/ffb-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-ffb-form-page',

  props: ['id'],

  components: {
    'app-ffb-form': FfbForm,
  },

  computed: {
    ...mapGetters({
      record: 'ffb/form/record',
      initLoading: 'ffb/form/initLoading',
      saveLoading: 'ffb/form/saveLoading',
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
      doInit: 'ffb/form/doInit',
      doUpdate: 'ffb/form/doUpdate',
      doCreate: 'ffb/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/ffb');
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
