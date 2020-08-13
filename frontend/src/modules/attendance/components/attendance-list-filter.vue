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
        <el-form-item :label="fields.dateRange.label" :prop="fields.dateRange.name">
          <el-date-picker type="daterange" v-model="model[fields.dateRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.worker.label" :prop="fields.worker.name">
          <app-autocomplete-one-input
            :fetchFn="fields.worker.fetchFn"
            v-model="model[fields.worker.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.type.label" :prop="fields.type.name">
          <el-select placeholder v-model="model[fields.type.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.type.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.hoursRange.label" :prop="fields.hoursRange.name">
          <app-number-range-input v-model="model[fields.hoursRange.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.totalHoursRange.label" :prop="fields.totalHoursRange.name">
          <app-number-range-input v-model="model[fields.totalHoursRange.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.overTimeRange.label" :prop="fields.overTimeRange.name">
          <app-number-range-input v-model="model[fields.overTimeRange.name]"/>
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
import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;

const filterSchema = new FilterSchema([
  fields.location,
  fields.dateRange,
  fields.worker,
  fields.type,
  fields.hoursRange,
  fields.totalHoursRange,
  fields.overTimeRange,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-attendance-list-filter',

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
      loading: 'attendance/list/loading',
      filter: 'attendance/list/filter',
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
      doReset: 'attendance/list/doReset',
      doFetch: 'attendance/list/doFetch',
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