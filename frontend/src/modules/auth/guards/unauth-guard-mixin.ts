import { storeAsync } from '@/app-module';
import Vue from 'vue';

export default Vue.extend({
  async beforeRouteEnter(to, from, next) {
    if (!to.meta || !to.meta.unauth) {
      next();
      return;
    }

    await storeAsync().dispatch('auth/doWaitUntilInit');

    if (storeAsync().getters['auth/signedIn']) {
      next('/');
    } else {
      next();
    }
  },
});
