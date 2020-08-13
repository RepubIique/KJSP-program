import routes from '@/modules/planted-area/planted-area-routes';
import store from '@/modules/planted-area/planted-area-store';
import PlantedAreaAutocompleteInput from '@/modules/planted-area/components/planted-area-autocomplete-input.vue';

export default {
  components: {
    'app-planted-area-autocomplete-input': PlantedAreaAutocompleteInput,
  },
  routes,
  store,
};
