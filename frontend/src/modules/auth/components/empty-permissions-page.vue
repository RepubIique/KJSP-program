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

        <h3
          style="font-weight: normal; text-align: center;"
        >
          <app-i18n
            code="auth.emptyPermissions.message"
          ></app-i18n>
        </h3>

        <div class="other-actions">
          <el-button @click="doSignout()" type="text">
            <app-i18n code="auth.signout"></app-i18n>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'app-empty-permissions-page',

  methods: {
    ...mapActions({
      doSignout: 'auth/doSignout',
    }),
  },

  computed: {
    ...mapGetters({
      backgroundImageUrl: 'auth/backgroundImageUrl',
      logoUrl: 'auth/logoUrl',
    }),

    wrapperStyle() {
      const backgroundImageUrl =
        this.backgroundImageUrl ||
        `/images/emptyPermissions.jpg`;

      return {
        backgroundImage: `url(${backgroundImageUrl})`,
      };
    },
  },
});
</script>
