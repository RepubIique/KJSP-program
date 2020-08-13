import workCodeListStore from '@/modules/work-code/work-code-list-store';
import workCodeViewStore from '@/modules/work-code/work-code-view-store';
import workCodeImporterStore from '@/modules/work-code/work-code-importer-store';
import workCodeFormStore from '@/modules/work-code/work-code-form-store';
import workCodeDestroyStore from '@/modules/work-code/work-code-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: workCodeDestroyStore,
    form: workCodeFormStore,
    list: workCodeListStore,
    view: workCodeViewStore,
    importer: workCodeImporterStore,
  },
};
