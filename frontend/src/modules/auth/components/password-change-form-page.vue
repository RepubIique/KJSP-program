<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="dashboard.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n
          code="auth.passwordChange.title"
        ></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n
          code="auth.passwordChange.title"
        ></app-i18n>
      </h1>

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
          :label="fields.oldPassword.label"
          :prop="fields.oldPassword.name"
          :required="fields.oldPassword.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input
              ref="focus"
              type="password"
              v-model="model[fields.oldPassword.name]"
            />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.newPassword.label"
          :prop="fields.newPassword.name"
          :required="fields.newPassword.required"
          type="password"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input
              type="password"
              v-model="model[fields.newPassword.name]"
            />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.newPasswordConfirmation.label"
          :prop="fields.newPasswordConfirmation.name"
          :required="
            fields.newPasswordConfirmation.required
          "
          type="password"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input
              type="password"
              v-model="
                model[fields.newPasswordConfirmation.name]
              "
            />
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

            <router-link :to="{ path: '/' }">
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
import { UserModel } from '@/modules/user/user-model';
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { i18n } from '../../../i18n';

const { fields } = UserModel;

const formSchema = new FormSchema([
  fields.oldPassword,
  fields.newPassword,
  fields.newPasswordConfirmation,
]);

import Vue from 'vue';
export default Vue.extend({
  name: 'app-password-change-form-page',

  data() {
    const rules = formSchema.rules();

    const passwordConfirmationValidator = (
      rule,
      value,
      callback,
    ) => {
      // @ts-ignore
      if (value !== this.model[fields.newPassword.name]) {
        callback(
          new Error(i18n('auth.passwordChange.mustMatch')),
        );
      } else {
        callback();
      }
    };

    return {
      rules: {
        ...rules,
        [fields.newPasswordConfirmation.name]: [
          ...rules[fields.newPasswordConfirmation.name],
          {
            validator: passwordConfirmationValidator,
            trigger: 'blur',
          },
        ],
      },
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      currentUser: 'auth/currentUser',
      saveLoading: 'auth/loadingPasswordChange',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    this.model = formSchema.initialValues(this.currentUser);
  },

  methods: {
    ...mapActions({
      doChangePassword: 'auth/doChangePassword',
    }),

    doReset() {
      this.model = formSchema.initialValues(
        this.currentUser,
      );
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const values = formSchema.cast(this.model);
      this.doChangePassword(values);
    },
  },
});
</script>
