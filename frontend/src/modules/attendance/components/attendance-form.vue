<template>
  <div>
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidthForm"
      :model="model"
      :rules="rules"
      @submit.native.prevent="doSubmit"
      class="form"
      ref="form"
      v-if="model"
    >
      <el-form-item
        :label="fields.location.label"
        :prop="fields.location.name"
        :required="fields.location.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-location-autocomplete-input
            :fetchFn="fields.location.fetchFn"
            :mapperFn="fields.location.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.location.name]"
            mode="single"
          ></app-location-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.date.label"
        :prop="fields.date.name"
        :required="fields.date.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-date-picker placeholder type="date" v-model="model[fields.date.name]"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.worker.label"
        :prop="fields.worker.name"
        :required="fields.worker.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-worker-registration-autocomplete-input
            :fetchFn="fields.worker.fetchFn"
            :mapperFn="fields.worker.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.worker.name]"
            mode="single"
          ></app-worker-registration-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.type.label"
        :prop="fields.type.name"
        :required="fields.type.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select placeholder v-model="model[fields.type.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.type.options"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.hours.label"
        :prop="fields.hours.name"
        :required="fields.hours.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.hours.scale" :step="0.1" v-model="model[fields.hours.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.totalHours.label"
        :prop="fields.totalHours.name"
        :required="fields.totalHours.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.totalHours.scale" :step="0.1" v-model="model[fields.totalHours.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.overTime.label"
        :prop="fields.overTime.name"
        :required="fields.overTime.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.overTime.scale" :step="0.1" v-model="model[fields.overTime.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item>
        <div class="form-buttons">
          <el-button
            :disabled="saveLoading"
            @click="doSubmit"
            icon="el-icon-fa-floppy-o"
            type="primary"
          >
            <app-i18n code="common.save"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doReset"
            icon="el-icon-fa-undo"
          >
            <app-i18n code="common.reset"></app-i18n>
          </el-button>

          <el-button
            :disabled="saveLoading"
            @click="doCancel"
            icon="el-icon-fa-close"
          >
            <app-i18n code="common.cancel"></app-i18n>
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;
const formSchema = new FormSchema([
  fields.location,
  fields.date,
  fields.worker,
  fields.type,
  fields.hours,
  fields.totalHours,
  fields.overTime,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-attendance-form',

  props: ['isEditing', 'record', 'saveLoading', 'modal'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  created() {
    this.model = formSchema.initialValues(
      this.record || {},
    );
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    fields() {
      return fields;
    },
  },

  methods: {
    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    doCancel() {
      this.$emit('cancel');
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      return this.$emit('submit', {
        id: this.record && this.record.id,
        values: formSchema.cast(this.model),
      });
    },
  },
});
</script>

<style></style>
