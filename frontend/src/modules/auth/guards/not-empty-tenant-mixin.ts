import { storeAsync } from '@/app-module';
import { PermissionChecker } from '@/modules/user/permission-checker';
import Vue from 'vue';

export default Vue.extend({
  async beforeRouteEnter(to, from, next) {
    if (!to.meta || !to.meta.notEmptyTenant) {
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
      next('/auth/signin');
      return;
    }

    if (!permissionChecker.isEmptyTenant) {
      next('/');
      return;
    }

    next();
  },
});
