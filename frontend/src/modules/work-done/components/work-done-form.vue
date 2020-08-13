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
        :label="fields.block.label"
        :prop="fields.block.name"
        :required="fields.block.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="0" :step="1" v-model="model[fields.block.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.quantity.label"
        :prop="fields.quantity.name"
        :required="fields.quantity.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.quantity.scale" :step="0.1" v-model="model[fields.quantity.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.remarks.label"
        :prop="fields.remarks.name"
        :required="fields.remarks.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.remarks.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.amount.label"
        :prop="fields.amount.name"
        :required="fields.amount.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.amount.scale" :step="0.1" v-model="model[fields.amount.name]" ></el-input-number>
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
import { WorkDoneModel } from '@/modules/work-done/work-done-model';

const { fields } = WorkDoneModel;
const formSchema = new FormSchema([
  fields.location,
  fields.date,
  fields.worker,
  fields.block,
  fields.quantity,
  fields.remarks,
  fields.amount,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-done-form',

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
