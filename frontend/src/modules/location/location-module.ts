import routes from '@/modules/location/location-routes';
import store from '@/modules/location/location-store';
import LocationAutocompleteInput from '@/modules/location/components/location-autocomplete-input.vue';

export default {
  components: {
    'app-location-autocomplete-input': LocationAutocompleteInput,
  },
  routes,
  store,
};
