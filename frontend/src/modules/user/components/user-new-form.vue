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
    >
      <el-form-item
        :label="fields.emails.label"
        :prop="fields.emails.name"
        :required="fields.emails.required"
        v-if="!single"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select
            :no-data-text="i18n('user.new.emailsHint')"
            allow-create
            default-first-option
            filterable
            multiple
            placeholder
            ref="focus"
            v-model="model[fields.emails.name]"
          ></el-select>
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.email.label"
        :prop="fields.email.name"
        :required="fields.email.required"
        v-if="single"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-input
            ref="focus"
            v-model="model[fields.email.name]"
          />
        </el-col>
      </el-form-item>

      <el-form-item
        :label="fields.roles.label"
        :prop="fields.roles.name"
        :required="fields.roles.required"
      >
        <el-col :lg="11" :md="16" :sm="24">
          <el-select
            multiple
            placeholder
            v-model="model[fields.roles.name]"
          >
            <el-option
              :key="option.value"
              :label="option.label"
              :value="option.value"
              v-for="option in fields.roles.options"
            ></el-option>
          </el-select>
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
import { UserModel } from '@/modules/user/user-model';
import { i18n } from '@/i18n';

const { fields } = UserModel;
const singleFormSchema = new FormSchema([
  fields.email,
  fields.firstName,
  fields.lastName,
  fields.phoneNumber,
  fields.avatars,
  fields.rolesRequired,
]);

const multipleFormSchema = new FormSchema([
  fields.emails,
  fields.firstName,
  fields.lastName,
  fields.phoneNumber,
  fields.avatars,
  fields.rolesRequired,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-new-form',

  props: ['saveLoading', 'single'],

  data() {
    return {
      rules: this.single
        ? singleFormSchema.rules()
        : multipleFormSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
    }),

    formSchema() {
      return this.single
        ? singleFormSchema
        : multipleFormSchema;
    },

    fields() {
      return fields;
    },
  },

  async created() {
    this.model = this.formSchema.initialValues();
  },

  methods: {
    doReset() {
      this.model = this.formSchema.initialValues();
      this.$refs.form.resetFields();
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const values = this.formSchema.cast(this.model);

      if (values.email) {
        values.emails = [values.email];
        delete values.email;
      }

      return this.$emit('submit', {
        id: null,
        values,
      });
    },

    doCancel() {
      this.$emit('cancel');
    },

    i18n(code) {
      return i18n(code);
    },
  },
});
</script>
