import deductionListStore from '@/modules/deduction/deduction-list-store';
import deductionViewStore from '@/modules/deduction/deduction-view-store';
import deductionImporterStore from '@/modules/deduction/deduction-importer-store';
import deductionFormStore from '@/modules/deduction/deduction-form-store';
import deductionDestroyStore from '@/modules/deduction/deduction-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: deductionDestroyStore,
    form: deductionFormStore,
    list: deductionListStore,
    view: deductionViewStore,
    importer: deductionImporterStore,
  },
};
