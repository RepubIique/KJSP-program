import locationListStore from '@/modules/location/location-list-store';
import locationViewStore from '@/modules/location/location-view-store';
import locationImporterStore from '@/modules/location/location-importer-store';
import locationFormStore from '@/modules/location/location-form-store';
import locationDestroyStore from '@/modules/location/location-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: locationDestroyStore,
    form: locationFormStore,
    list: locationListStore,
    view: locationViewStore,
    importer: locationImporterStore,
  },
};
