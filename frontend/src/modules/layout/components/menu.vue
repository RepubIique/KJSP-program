<template>
  <el-aside :width="asideWidth">
    <h1 class="logo">
      <router-link to="/">
        <img
          v-if="logoUrl"
          :src="logoUrl"
          width="164px"
          alt=""
          :style="{ verticalAlign: 'middle' }"
        />
        <app-i18n
          v-if="!logoUrl"
          code="app.title"
        ></app-i18n>
      </router-link>
    </h1>

    <el-menu
      background-color="#001529"
      text-color="rgba(255,255,255,0.65)"
      :class="{
        'el-menu-side-nav': true,
        collapsed: collapsed,
      }"
      :collapse="collapsed"
      :collapse-transition="false"
      :router="true"
      @select="collapseMenuIfMobile()"
    >
      <el-menu-item
        :class="classFor('/', true)"
        :route="{ path: '/' }"
        index="/"
      >
        <i class="el-icon-fa-tachometer"></i>
        <span slot="title">
          <app-i18n code="dashboard.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/plan')"
        :route="{ path: '/plan' }"
        index="/plan"
        v-if="hasPermissionToPlan || planLocked"
        :disabled="planLocked"
      >
        <i class="el-icon-fa-credit-card"></i>
        <span slot="title">
          <app-i18n code="plan.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/user')"
        :route="{ path: '/user' }"
        index="/user"
        v-if="hasPermissionToUser || userLocked"
        :disabled="userLocked"
      >
        <i class="el-icon-fa-user-plus"></i>
        <span slot="title">
          <app-i18n code="user.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/audit-logs')"
        :route="{ path: '/audit-logs' }"
        index="/audit-logs"
        v-if="hasPermissionToAuditLog || auditLogLocked"
        :disabled="auditLogLocked"
      >
        <i class="el-icon-fa-history"></i>
        <span slot="title">
          <app-i18n code="auditLog.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/settings')"
        :route="{ path: '/settings' }"
        index="/settings"
        v-if="hasPermissionToSettings || settingsLocked"
        :disabled="settingsLocked"
      >
        <i class="el-icon-fa-cog"></i>
        <span slot="title">
          <app-i18n code="settings.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/location')"
        :route="{ path: '/location' }"
        index="/location"
        v-if="hasPermissionToLocation || locationLocked"
        :disabled="locationLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.location.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/worker-registration')"
        :route="{ path: '/worker-registration' }"
        index="/worker-registration"
        v-if="hasPermissionToWorkerRegistration || workerRegistrationLocked"
        :disabled="workerRegistrationLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.workerRegistration.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/work-code')"
        :route="{ path: '/work-code' }"
        index="/work-code"
        v-if="hasPermissionToWorkCode || workCodeLocked"
        :disabled="workCodeLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.workCode.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/work-done')"
        :route="{ path: '/work-done' }"
        index="/work-done"
        v-if="hasPermissionToWorkDone || workDoneLocked"
        :disabled="workDoneLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.workDone.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/attendance')"
        :route="{ path: '/attendance' }"
        index="/attendance"
        v-if="hasPermissionToAttendance || attendanceLocked"
        :disabled="attendanceLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.attendance.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/deduction')"
        :route="{ path: '/deduction' }"
        index="/deduction"
        v-if="hasPermissionToDeduction || deductionLocked"
        :disabled="deductionLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.deduction.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/ffb')"
        :route="{ path: '/ffb' }"
        index="/ffb"
        v-if="hasPermissionToFfb || ffbLocked"
        :disabled="ffbLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.ffb.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/f-f-bproduction')"
        :route="{ path: '/f-f-bproduction' }"
        index="/f-f-bproduction"
        v-if="hasPermissionToFFBproduction || fFBproductionLocked"
        :disabled="fFBproductionLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.fFBproduction.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-menu-item
        :class="classFor('/planted-area')"
        :route="{ path: '/planted-area' }"
        index="/planted-area"
        v-if="hasPermissionToPlantedArea || plantedAreaLocked"
        :disabled="plantedAreaLocked"
      >
        <i class="el-icon-fa-chevron-right"></i>
        <span slot="title">
          <app-i18n code="entities.plantedArea.menu"></app-i18n>
        </span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { SettingsPermissions } from '@/modules/settings/settings-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { UserPermissions } from '@/modules/user/user-permissions';
import { PlanPermissions } from '@/modules/plan/plan-permissions';
import { LocationPermissions } from '@/modules/location/location-permissions';
import { WorkerRegistrationPermissions } from '@/modules/worker-registration/worker-registration-permissions';
import { WorkCodePermissions } from '@/modules/work-code/work-code-permissions';
import { WorkDonePermissions } from '@/modules/work-done/work-done-permissions';
import { AttendancePermissions } from '@/modules/attendance/attendance-permissions';
import { DeductionPermissions } from '@/modules/deduction/deduction-permissions';
import { FfbPermissions } from '@/modules/ffb/ffb-permissions';
import { FFBproductionPermissions } from '@/modules/f-f-bproduction/f-f-bproduction-permissions';
import { PlantedAreaPermissions } from '@/modules/planted-area/planted-area-permissions';
import config from '@/config';

import Vue from 'vue';
export default Vue.extend({
  name: 'app-menu',

  computed: {
    ...mapGetters({
      collapsed: 'layout/menuCollapsed',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      currentTenant: 'auth/currentTenant',
      logoUrl: 'auth/logoUrl',
    }),

    hasPermissionToPlan() {
      return (
        config.isPlanEnabled &&
        new PlanPermissions(
          this.currentTenant,
          this.currentUser,
        ).read
      );
    },

    hasPermissionToSettings() {
      return new SettingsPermissions(
        this.currentTenant,
        this.currentUser,
      ).edit;
    },

    hasPermissionToAuditLog() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },

    hasPermissionToUser() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).read;
    },

    hasPermissionToLocation() {
      return new LocationPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToWorkerRegistration() {
      return new WorkerRegistrationPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToWorkCode() {
      return new WorkCodePermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToWorkDone() {
      return new WorkDonePermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToAttendance() {
      return new AttendancePermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToDeduction() {
      return new DeductionPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToFfb() {
      return new FfbPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToFFBproduction() {
      return new FFBproductionPermissions(this.currentTenant, this.currentUser).read;
    },
    hasPermissionToPlantedArea() {
      return new PlantedAreaPermissions(this.currentTenant, this.currentUser).read;
    },

    planLocked() {
      return (
        config.isPlanEnabled &&
        new PlanPermissions(
          this.currentTenant,
          this.currentUser,
        ).lockedForCurrentPlan
      );
    },

    settingsLocked() {
      return new SettingsPermissions(
        this.currentTenant,
        this.currentUser,
      ).lockedForCurrentPlan;
    },

    auditLogLocked() {
      return new AuditLogPermissions(
        this.currentTenant,
        this.currentUser,
      ).lockedForCurrentPlan;
    },

    userLocked() {
      return new UserPermissions(
        this.currentTenant,
        this.currentUser,
      ).lockedForCurrentPlan;
    },

    locationLocked() {
      return new LocationPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    workerRegistrationLocked() {
      return new WorkerRegistrationPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    workCodeLocked() {
      return new WorkCodePermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    workDoneLocked() {
      return new WorkDonePermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    attendanceLocked() {
      return new AttendancePermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    deductionLocked() {
      return new DeductionPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    ffbLocked() {
      return new FfbPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    fFBproductionLocked() {
      return new FFBproductionPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },
    plantedAreaLocked() {
      return new PlantedAreaPermissions(this.currentTenant, this.currentUser).lockedForCurrentPlan;
    },

    asideWidth() {
      if (this.isMobile && !this.collapsed) {
        return '100%';
      }

      if (!this.collapsed) {
        return '200px';
      }

      return '0px';
    },
  },

  methods: {
    ...mapActions({
      collapseMenu: 'layout/collapseMenu',
    }),

    collapseMenuIfMobile() {
      if (this.isMobile) {
        this.collapseMenu();
      }
    },

    classFor(path, exact = false) {
      if (exact) {
        return {
          active: this.$route.path === path,
        };
      }

      const routePath = this.$route.path;
      const active =
        routePath === path ||
        routePath.startsWith(path + '/');

      return {
        active,
      };
    },
  },
});
</script>

<style scoped>
.el-menu.collapsed span {
  visibility: hidden;
}
</style>
