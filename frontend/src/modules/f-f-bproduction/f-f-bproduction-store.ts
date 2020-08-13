import fFBproductionListStore from '@/modules/f-f-bproduction/f-f-bproduction-list-store';
import fFBproductionViewStore from '@/modules/f-f-bproduction/f-f-bproduction-view-store';
import fFBproductionImporterStore from '@/modules/f-f-bproduction/f-f-bproduction-importer-store';
import fFBproductionFormStore from '@/modules/f-f-bproduction/f-f-bproduction-form-store';
import fFBproductionDestroyStore from '@/modules/f-f-bproduction/f-f-bproduction-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: fFBproductionDestroyStore,
    form: fFBproductionFormStore,
    list: fFBproductionListStore,
    view: fFBproductionViewStore,
    importer: fFBproductionImporterStore,
  },
};
