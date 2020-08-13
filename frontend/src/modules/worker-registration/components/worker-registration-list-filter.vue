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
        <el-form-item :label="fields.name.label" :prop="fields.name.name">
          <el-input v-model="model[fields.name.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.designation.label" :prop="fields.designation.name">
          <el-input v-model="model[fields.designation.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.passport.label" :prop="fields.passport.name">
          <el-input v-model="model[fields.passport.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.permitExpiryDateRange.label" :prop="fields.permitExpiryDateRange.name">
          <el-date-picker type="daterange" v-model="model[fields.permitExpiryDateRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.dateEmployedRange.label" :prop="fields.dateEmployedRange.name">
          <el-date-picker type="daterange" v-model="model[fields.dateEmployedRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.gang.label" :prop="fields.gang.name">
          <el-input v-model="model[fields.gang.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.superiorName.label" :prop="fields.superiorName.name">
          <el-input v-model="model[fields.superiorName.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.dobRange.label" :prop="fields.dobRange.name">
          <el-date-picker type="daterange" v-model="model[fields.dobRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item
          :label="fields.ageRange.label"
          :prop="fields.ageRange.name"
        >
          <app-number-range-input v-model="model[fields.ageRange.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.gender.label" :prop="fields.gender.name">
          <el-select placeholder v-model="model[fields.gender.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.gender.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.placeOfBirth.label" :prop="fields.placeOfBirth.name">
          <el-input v-model="model[fields.placeOfBirth.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.nationality.label" :prop="fields.nationality.name">
          <el-input v-model="model[fields.nationality.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.religion.label" :prop="fields.religion.name">
          <el-input v-model="model[fields.religion.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.race.label" :prop="fields.race.name">
          <el-input v-model="model[fields.race.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.maritalStatus.label" :prop="fields.maritalStatus.name">
          <el-select placeholder v-model="model[fields.maritalStatus.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.maritalStatus.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.spouse.label" :prop="fields.spouse.name">
          <el-input v-model="model[fields.spouse.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item
          :label="fields.childrenRange.label"
          :prop="fields.childrenRange.name"
        >
          <app-number-range-input v-model="model[fields.childrenRange.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.bank.label" :prop="fields.bank.name">
          <el-input v-model="model[fields.bank.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.bankNo.label" :prop="fields.bankNo.name">
          <el-input v-model="model[fields.bankNo.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.socso.label" :prop="fields.socso.name">
          <el-input v-model="model[fields.socso.name]"/>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.location.label" :prop="fields.location.name">
          <app-autocomplete-one-input
            :fetchFn="fields.location.fetchFn"
            v-model="model[fields.location.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.status.label" :prop="fields.status.name">
          <el-select placeholder v-model="model[fields.status.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></el-option>
          </el-select>
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
import { WorkerRegistrationModel } from '@/modules/worker-registration/worker-registration-model';

const { fields } = WorkerRegistrationModel;

const filterSchema = new FilterSchema([
  fields.name,
  fields.designation,
  fields.passport,
  fields.permitExpiryDateRange,
  fields.dateEmployedRange,
  fields.gang,
  fields.superiorName,
  fields.dobRange,
  fields.ageRange,
  fields.gender,
  fields.placeOfBirth,
  fields.nationality,
  fields.religion,
  fields.race,
  fields.maritalStatus,
  fields.spouse,
  fields.childrenRange,
  fields.bank,
  fields.bankNo,
  fields.socso,
  fields.location,
  fields.status,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-worker-registration-list-filter',

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
      loading: 'workerRegistration/list/loading',
      filter: 'workerRegistration/list/filter',
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
      doReset: 'workerRegistration/list/doReset',
      doFetch: 'workerRegistration/list/doFetch',
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