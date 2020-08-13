import routes from '@/modules/f-f-bproduction/f-f-bproduction-routes';
import store from '@/modules/f-f-bproduction/f-f-bproduction-store';
import FFBproductionAutocompleteInput from '@/modules/f-f-bproduction/components/f-f-bproduction-autocomplete-input.vue';

export default {
  components: {
    'app-f-f-bproduction-autocomplete-input': FFBproductionAutocompleteInput,
  },
  routes,
  store,
};
