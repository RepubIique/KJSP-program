import { storeAsync } from '@/app-module';
import { PermissionChecker } from '@/modules/user/permission-checker';
import Vue from 'vue';

export default Vue.extend({
  async beforeRouteEnter(to, from, next) {
    if (!to.meta || !to.meta.permission) {
      next();
      return;
    }

    await storeAsync().dispatch('auth/doWaitUntilInit');

    if (
      new PermissionChecker(
        storeAsync().getters['auth/currentTenant'],
        storeAsync().getters['auth/currentUser'],
      ).match(to.meta.permission)
    ) {
      next();
    } else {
      next('/403');
    }
  },
});
