<template>
  <el-row type="flex">
    <el-col :span="4">
      <h1>
        <i
          @click="toggleMenu"
          class="raw-icon el-icon-fa-bars"
          style="
            color: rgba(0, 0, 0, 0.75);
            cursor: pointer;
            margin-right: 35px;
          "
        ></i>
      </h1>
    </el-col>
    <el-col :span="20" style="text-align: right;">
      <div class="header-actions">
        <el-dropdown @command="handleDropdownCommand">
          <div class="el-dropdown-link">
            <div class="el-dropdown-link-body">
              <div
                class="app-avatar"
                style="margin-right: 8px;"
              >
                <img
                  :src="currentUserAvatar"
                  v-if="currentUserAvatar"
                />
              </div>
              <div
                class="el-dropdown-link-text"
                v-if="!isMobile"
              >
                <div>
                  {{ currentUserNameOrEmailPrefix }}
                </div>
                <small
                  v-if="
                    [
                      'multi',
                      'multi-with-subdomain',
                    ].includes(tenantMode)
                  "
                  >{{ currentTenant.name }}</small
                >
              </div>
              <i
                class="el-icon-arrow-down el-icon--right"
              ></i>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="doEditProfile">
              <i class="el-icon-fa-user-o"></i> &#160;
              <app-i18n
                code="auth.profile.title"
              ></app-i18n>
            </el-dropdown-item>
            <el-dropdown-item command="doPasswordChange">
              <i class="el-icon-fa-lock"></i> &#160;
              <app-i18n
                code="auth.passwordChange.title"
              ></app-i18n>
            </el-dropdown-item>
            <el-dropdown-item
              command="doSwitchTenants"
              v-if="
                ['multi', 'multi-with-subdomain'].includes(
                  tenantMode,
                )
              "
            >
              <i class="el-icon-fa-th-large"></i> &#160;
              <app-i18n code="auth.tenants"></app-i18n>
            </el-dropdown-item>
            <el-dropdown-item command="doSignout">
              <i class="el-icon-fa-sign-out"></i> &#160;
              <app-i18n code="auth.signout"></app-i18n>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <app-i18n-select class="hide-xs"></app-i18n-select>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue';
import config from '@/config';
import { mapGetters, mapActions } from 'vuex';
import { i18n } from '@/i18n';

export default Vue.extend({
  name: 'app-header',

  computed: {
    ...mapGetters({
      currentUserNameOrEmailPrefix:
        'auth/currentUserNameOrEmailPrefix',
      currentUserAvatar: 'auth/currentUserAvatar',
      currentTenant: 'auth/currentTenant',
      isMobile: 'layout/isMobile',
    }),

    tenantMode() {
      return config.tenantMode;
    },
  },

  methods: {
    ...mapActions({
      toggleMenu: 'layout/toggleMenu',
      doSignout: 'auth/doSignout',
    }),

    i18n(key, args) {
      return i18n(key, args);
    },

    handleDropdownCommand(command) {
      if (command === 'doSignout') {
        this.doSignout();
      }

      if (command === 'doEditProfile') {
        this.doEditProfile();
      }

      if (command === 'doSwitchTenants') {
        this.doSwitchTenants();
      }

      if (command === 'doPasswordChange') {
        this.doPasswordChange();
      }
    },

    doEditProfile() {
      return this.$router.push('/auth/edit-profile');
    },

    doPasswordChange() {
      return this.$router.push('/password-change');
    },

    doSwitchTenants() {
      return this.$router.push('/tenant');
    },
  },
});
</script>

<style></style>
