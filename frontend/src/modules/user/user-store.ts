import userDestroyStore from '@/modules/user/user-destroy-store';
import userListStore from '@/modules/user/user-list-store';
import userFormStore from '@/modules/user/user-form-store';
import userViewStore from '@/modules/user/user-view-store';
import userImporterStore from '@/modules/user/user-importer-store';

export default {
  namespaced: true,

  modules: {
    destroy: userDestroyStore,
    list: userListStore,
    form: userFormStore,
    view: userViewStore,
    importer: userImporterStore,
  },
};
