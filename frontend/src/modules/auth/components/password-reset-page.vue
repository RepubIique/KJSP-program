<template>
  <div class="auth">
    <div class="wrapper" :style="wrapperStyle">
      <div class="content">
        <div class="logo">
          <img
            v-if="logoUrl"
            :src="logoUrl"
            width="240px"
            alt=""
          />
          <h1 v-if="!logoUrl">
            <app-i18n code="app.title"></app-i18n>
          </h1>
        </div>

        <el-form
          :model="model"
          :rules="rules"
          @submit.prevent.native="doSubmit"
          class="form"
          label-position="left"
          label-width="0px"
          ref="form"
        >
          <el-form-item :prop="fields.password.name">
            <el-input
              :placeholder="fields.password.label"
              auto-complete="off"
              type="password"
              v-model="model[fields.password.name]"
            ></el-input>
          </el-form-item>

          <el-form-item class="form-buttons">
            <el-button
              :loading="loading"
              class="w-100"
              native-type="submit"
              type="primary"
            >
              <app-i18n
                code="auth.passwordReset.message"
              ></app-i18n>
            </el-button>
          </el-form-item>

          <div class="other-actions">
            <router-link :to="{ path: '/auth/signin' }">
              <el-button type="text">
                <app-i18n code="common.cancel"></app-i18n>
              </el-button>
            </router-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { UserModel } from '@/modules/user/user-model';

const { fields } = UserModel;

import Vue from 'vue';
export default Vue.extend({
  name: 'app-password-reset-page',

  data() {
    return {
      rules: {
        password: fields.password.forFormRules(),
      },
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      loading: 'auth/loadingPasswordReset',
      backgroundImageUrl: 'auth/backgroundImageUrl',
      logoUrl: 'auth/logoUrl',
    }),

    wrapperStyle() {
      const backgroundImageUrl =
        this.backgroundImageUrl ||
        `/images/forgotPassword.jpg`;

      return {
        backgroundImage: `url(${backgroundImageUrl})`,
      };
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doResetPassword: 'auth/doResetPassword',
    }),

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      await this.doResetPassword({
        token: this.$route.query.token,
        password: this.model.password,
      });
    },
  },
});
</script>
