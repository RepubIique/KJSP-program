<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="plan.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="plan.title"></app-i18n>
      </h1>

      <div>
        <el-row :gutter="20">
          <el-col :lg="8" :md="12" :sm="24">
            <app-plan-card-free></app-plan-card-free>
          </el-col>
          <el-col :lg="8" :md="12" :sm="24">
            <app-plan-card-paid
              :plan="plans.growth"
            ></app-plan-card-paid>
          </el-col>
          <el-col :lg="8" :md="12" :sm="24">
            <app-plan-card-paid
              :plan="plans.enterprise"
            ></app-plan-card-paid>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import Plans from '@/security/plans';
import PlanCardFree from '@/modules/plan/components/plan-card-free.vue';
import PlanCardPaid from '@/modules/plan/components/plan-card-paid.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-plan-page',

  components: {
    'app-plan-card-free': PlanCardFree,
    'app-plan-card-paid': PlanCardPaid,
  },

  computed: {
    ...mapGetters({
      currentTenant: 'auth/currentTenant',
    }),

    plans() {
      return Plans.values;
    },
  },
});
</script>

<style></style>
