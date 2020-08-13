<template>
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form" 
  >
    <el-row type="flex">
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.location.label" :prop="fields.location.name">
          <app-autocomplete-one-input
            :fetchFn="fields.location.fetchFn"
            v-model="model[fields.location.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item
          :label="fields.blockRange.label"
          :prop="fields.blockRange.name"
        >
          <app-number-range-input v-model="model[fields.blockRange.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.budgetRange.label" :prop="fields.budgetRange.name">
          <app-number-range-input v-model="model[fields.budgetRange.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.dateRange.label" :prop="fields.dateRange.name">
          <el-date-picker type="daterange" v-model="model[fields.dateRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>

    <div class="filter-buttons">
      <el-button
        :disabled="loading"
        @click="doFilter"
        icon="el-icon-fa-search"
        type="primary"
      >
        <app-i18n code="common.search"></app-i18n>
      </el-button>

      <el-button
        :disabled="loading"
        @click="doResetFilter"
        icon="el-icon-fa-undo"
      >
        <app-i18n code="common.reset"></app-i18n>
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { FfbModel } from '@/modules/ffb/ffb-model';

const { fields } = FfbModel;

const filterSchema = new FilterSchema([
  fields.location,
  fields.blockRange,
  fields.budgetRange,
  fields.dateRange,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-ffb-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'ffb/list/loading',
      filter: 'ffb/list/filter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'ffb/list/doReset',
      doFetch: 'ffb/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },
  },
});
</script>

<style></style>