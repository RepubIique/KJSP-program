import routes from '@/modules/worker-registration/worker-registration-routes';
import store from '@/modules/worker-registration/worker-registration-store';
import WorkerRegistrationAutocompleteInput from '@/modules/worker-registration/components/worker-registration-autocomplete-input.vue';

export default {
  components: {
    'app-worker-registration-autocomplete-input': WorkerRegistrationAutocompleteInput,
  },
  routes,
  store,
};
