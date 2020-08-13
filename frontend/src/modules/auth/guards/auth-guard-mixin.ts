import { storeAsync } from '@/app-module';
import { PermissionChecker } from '@/modules/user/permission-checker';
import Vue from 'vue';
import config from '@/config';
import { tenantSubdomain } from '@/modules/tenant/tenant-subdomain';

export default Vue.extend({
  async beforeRouteEnter(to, from, next) {
    if (!to.meta || !to.meta.auth) {
      next();
      return;
    }

    const store = storeAsync();

    await store.dispatch('auth/doWaitUntilInit');

    const permissionChecker = new PermissionChecker(
      store.getters['auth/currentTenant'],
      store.getters['auth/currentUser'],
    );

    if (!permissionChecker.isAuthenticated) {
      next({ path: '/auth/signin' });
      return;
    }

    if (
      to.path !== '/auth/email-unverified' &&
      !permissionChecker.isEmailVerified
    ) {
      next({ path: '/auth/email-unverified' });
      return;
    }

    if (
      ['multi', 'multi-with-subdomain'].includes(
        config.tenantMode,
      ) &&
      !tenantSubdomain.isSubdomain
    ) {
      if (
        to.path !== '/auth/tenant' &&
        permissionChecker.isEmailVerified &&
        permissionChecker.isEmptyTenant
      ) {
        next({ path: '/auth/tenant' });
        return;
      }
    } else {
      if (
        to.path !== '/auth/empty-permissions' &&
        permissionChecker.isEmailVerified &&
        permissionChecker.isEmptyPermissions
      ) {
        next({ path: '/auth/empty-permissions' });
        return;
      }
    }

    next();
  },
});
