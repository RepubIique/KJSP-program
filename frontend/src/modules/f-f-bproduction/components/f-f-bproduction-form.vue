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

      <el-form-item
        :label="fields.mill.label"
        :prop="fields.mill.name"
        :required="fields.mill.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.mill.name]" />
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
        :label="fields.bunches.label"
        :prop="fields.bunches.name"
        :required="fields.bunches.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.bunches.scale" :step="0.1" v-model="model[fields.bunches.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.mt.label"
        :prop="fields.mt.name"
        :required="fields.mt.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.mt.scale" :step="0.1" v-model="model[fields.mt.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.looseFruit.label"
        :prop="fields.looseFruit.name"
        :required="fields.looseFruit.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.looseFruit.scale" :step="0.1" v-model="model[fields.looseFruit.name]" ></el-input-number>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.bunchWeight.label"
        :prop="fields.bunchWeight.name"
        :required="fields.bunchWeight.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.bunchWeight.scale" :step="0.1" v-model="model[fields.bunchWeight.name]" ></el-input-number>
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
import { FFBproductionModel } from '@/modules/f-f-bproduction/f-f-bproduction-model';

const { fields } = FFBproductionModel;
const formSchema = new FormSchema([
  fields.date,
  fields.location,
  fields.mill,
  fields.block,
  fields.bunches,
  fields.mt,
  fields.looseFruit,
  fields.bunchWeight,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-f-f-bproduction-form',

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
