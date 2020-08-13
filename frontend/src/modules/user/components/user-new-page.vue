<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user' }">
        <app-i18n code="user.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="user.new.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="user.new.title"></app-i18n>
      </h1>

      <app-user-new-form
        :saveLoading="saveLoading"
        @cancel="doCancel"
        @submit="doSubmit"
      ></app-user-new-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import UserNewForm from '@/modules/user/components/user-new-form.vue';
import { routerAsync } from '@/app-module';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-new-page',

  components: {
    'app-user-new-form': UserNewForm,
  },

  computed: {
    ...mapGetters({
      saveLoading: 'user/form/saveLoading',
    }),
  },

  async created() {
    await this.doInit();
  },

  methods: {
    ...mapActions({
      doInit: 'user/form/doInit',
      doAdd: 'user/form/doAdd',
    }),

    doCancel() {
      routerAsync().push('/user');
    },

    async doSubmit(payload) {
      return this.doAdd(payload.values);
    },
  },
});
</script>
