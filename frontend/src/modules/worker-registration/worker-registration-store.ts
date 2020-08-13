import workerRegistrationListStore from '@/modules/worker-registration/worker-registration-list-store';
import workerRegistrationViewStore from '@/modules/worker-registration/worker-registration-view-store';
import workerRegistrationImporterStore from '@/modules/worker-registration/worker-registration-importer-store';
import workerRegistrationFormStore from '@/modules/worker-registration/worker-registration-form-store';
import workerRegistrationDestroyStore from '@/modules/worker-registration/worker-registration-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: workerRegistrationDestroyStore,
    form: workerRegistrationFormStore,
    list: workerRegistrationListStore,
    view: workerRegistrationViewStore,
    importer: workerRegistrationImporterStore,
  },
};
