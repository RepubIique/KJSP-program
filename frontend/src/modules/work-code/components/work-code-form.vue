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
        :label="fields.category.label"
        :prop="fields.category.name"
        :required="fields.category.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.category.name]" ref="focus" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.type.label"
        :prop="fields.type.name"
        :required="fields.type.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.type.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.description.label"
        :prop="fields.description.name"
        :required="fields.description.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.description.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.uom.label"
        :prop="fields.uom.name"
        :required="fields.uom.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input v-model="model[fields.uom.name]" />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.rate.label"
        :prop="fields.rate.name"
        :required="fields.rate.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input-number :precision="fields.rate.scale" :step="0.1" v-model="model[fields.rate.name]" ></el-input-number>
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
import { WorkCodeModel } from '@/modules/work-code/work-code-model';

const { fields } = WorkCodeModel;
const formSchema = new FormSchema([
  fields.category,
  fields.type,
  fields.description,
  fields.uom,
  fields.rate,
  fields.remarks,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-work-code-form',

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
