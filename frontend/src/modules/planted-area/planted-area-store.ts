import plantedAreaListStore from '@/modules/planted-area/planted-area-list-store';
import plantedAreaViewStore from '@/modules/planted-area/planted-area-view-store';
import plantedAreaImporterStore from '@/modules/planted-area/planted-area-importer-store';
import plantedAreaFormStore from '@/modules/planted-area/planted-area-form-store';
import plantedAreaDestroyStore from '@/modules/planted-area/planted-area-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: plantedAreaDestroyStore,
    form: plantedAreaFormStore,
    list: plantedAreaListStore,
    view: plantedAreaViewStore,
    importer: plantedAreaImporterStore,
  },
};
