import routes from '@/modules/ffb/ffb-routes';
import store from '@/modules/ffb/ffb-store';
import FfbAutocompleteInput from '@/modules/ffb/components/ffb-autocomplete-input.vue';

export default {
  components: {
    'app-ffb-autocomplete-input': FfbAutocompleteInput,
  },
  routes,
  store,
};
