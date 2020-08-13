import ffbListStore from '@/modules/ffb/ffb-list-store';
import ffbViewStore from '@/modules/ffb/ffb-view-store';
import ffbImporterStore from '@/modules/ffb/ffb-importer-store';
import ffbFormStore from '@/modules/ffb/ffb-form-store';
import ffbDestroyStore from '@/modules/ffb/ffb-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: ffbDestroyStore,
    form: ffbFormStore,
    list: ffbListStore,
    view: ffbViewStore,
    importer: ffbImporterStore,
  },
};
