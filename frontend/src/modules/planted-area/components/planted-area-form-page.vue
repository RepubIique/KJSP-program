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
          code="entities.plantedArea.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.plantedArea.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="entities.plantedArea.edit.title"
          v-if="isEditing"
        ></app-i18n>
        <app-i18n
          code="entities.plantedArea.new.title"
          v-if="!isEditing"
        ></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

      <app-planted-area-form
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
import PlantedAreaForm from '@/modules/planted-area/components/planted-area-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-planted-area-form-page',

  props: ['id'],

  components: {
    'app-planted-area-form': PlantedAreaForm,
  },

  computed: {
    ...mapGetters({
      record: 'plantedArea/form/record',
      initLoading: 'plantedArea/form/initLoading',
      saveLoading: 'plantedArea/form/saveLoading',
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
      doInit: 'plantedArea/form/doInit',
      doUpdate: 'plantedArea/form/doUpdate',
      doCreate: 'plantedArea/form/doCreate',
    }),

    doCancel() {
      routerAsync().push('/planted-area');
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
