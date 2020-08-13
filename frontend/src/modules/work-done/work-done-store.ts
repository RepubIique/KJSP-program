import workDoneListStore from '@/modules/work-done/work-done-list-store';
import workDoneViewStore from '@/modules/work-done/work-done-view-store';
import workDoneImporterStore from '@/modules/work-done/work-done-importer-store';
import workDoneFormStore from '@/modules/work-done/work-done-form-store';
import workDoneDestroyStore from '@/modules/work-done/work-done-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: workDoneDestroyStore,
    form: workDoneFormStore,
    list: workDoneListStore,
    view: workDoneViewStore,
    importer: workDoneImporterStore,
  },
};
