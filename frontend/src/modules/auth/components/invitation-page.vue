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

        <div
          class="app-page-spinner"
          v-if="loading"
          v-loading="loading"
        ></div>

        <h3
          style="font-weight: normal; text-align: center;"
          v-if="warningMessage"
        >
          {{ warningMessage }}
        </h3>

        <el-button
          :loading="loading"
          @click="doAcceptWithWrongEmail"
          class="w-100"
          type="primary"
          v-if="warningMessage"
        >
          <app-i18n
            code="tenant.invitation.acceptWrongEmail"
          ></app-i18n>
        </el-button>

        <div class="other-actions" v-if="!loading">
          <el-button @click="doSignout" type="text">
            <app-i18n code="auth.signout"></app-i18n>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-invitation-page',
  data() {
    return {};
  },

  created() {
    return this.doAcceptFromAuth({
      token: this.$route.query.token,
    });
  },

  computed: {
    ...mapGetters({
      warningMessage: 'tenant/invitation/warningMessage',
      loading: 'tenant/invitation/loading',
      backgroundImageUrl: 'auth/backgroundImageUrl',
      logoUrl: 'auth/logoUrl',
    }),

    wrapperStyle() {
      const backgroundImageUrl =
        this.backgroundImageUrl || `/images/invitation.jpg`;

      return {
        backgroundImage: `url(${backgroundImageUrl})`,
      };
    },

    token() {
      return this.$route.query.token;
    },
  },

  methods: {
    ...mapActions({
      doAcceptFromAuth:
        'tenant/invitation/doAcceptFromAuth',
      doSignout: 'auth/doSignout',
    }),

    doAcceptWithWrongEmail() {
      return this.doAcceptFromAuth({
        token: this.token,
        forceAcceptOtherEmail: true,
      });
    },
  },
});
</script>

<style></style>
