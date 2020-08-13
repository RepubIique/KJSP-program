<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user' }">
        <app-i18n code="user.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="user.edit.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="user.edit.title"></app-i18n>
      </h1>

      <div
        class="app-page-spinner"
        v-if="initLoading"
        v-loading="initLoading"
      ></div>

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
          :label="fields.email.label"
          :prop="fields.email.name"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input
              disabled
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

            <router-link :to="{ path: '/user' }">
              <el-button
                :disabled="saveLoading"
                icon="el-icon-fa-close"
              >
                <app-i18n code="common.cancel"></app-i18n>
              </el-button>
            </router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { UserModel } from '@/modules/user/user-model';
import { i18n } from '@/i18n';

const { fields } = UserModel;
const formSchema = new FormSchema([
  fields.email,
  fields.roles,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-user-edit-page',

  props: ['id'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'user/form/record',
      initLoading: 'user/form/initLoading',
      saveLoading: 'user/form/saveLoading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doInit(this.id);
    this.model = formSchema.initialValues(this.record);
  },

  methods: {
    ...mapActions({
      doInit: 'user/form/doInit',
      doUpdate: 'user/form/doUpdate',
    }),

    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const values = formSchema.cast(this.model);
      delete values.email;
      this.doUpdate({
        id: this.record && this.record.id,
        ...values,
      });
    },

    i18n(code) {
      return i18n(code);
    },
  },
});
</script>
