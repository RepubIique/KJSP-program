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
        :label="fields.worker.label"
        :prop="fields.worker.name"
        :required="fields.worker.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <app-deduction-autocomplete-input
            :fetchFn="fields.worker.fetchFn"
            :mapperFn="fields.worker.mapperFn"
            :showCreate="!modal"
            v-model="model[fields.worker.name]"
            mode="single"
          ></app-deduction-autocomplete-input>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.bf.label"
        :prop="fields.bf.name"
        :required="fields.bf.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.bf.scale" :step="0.1" v-model="model[fields.bf.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.credit.label"
        :prop="fields.credit.name"
        :required="fields.credit.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.credit.scale" :step="0.1" v-model="model[fields.credit.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.deduction.label"
        :prop="fields.deduction.name"
        :required="fields.deduction.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.deduction.scale" :step="0.1" v-model="model[fields.deduction.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.cf.label"
        :prop="fields.cf.name"
        :required="fields.cf.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.cf.scale" :step="0.1" v-model="model[fields.cf.name]" ></el-input-number>
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
import { DeductionModel } from '@/modules/deduction/deduction-model';

const { fields } = DeductionModel;
const formSchema = new FormSchema([
  fields.worker,
  fields.bf,
  fields.credit,
  fields.deduction,
  fields.cf,
  fields.date,
  fields.location,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-deduction-form',

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
