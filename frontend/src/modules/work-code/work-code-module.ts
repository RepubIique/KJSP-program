import routes from '@/modules/work-code/work-code-routes';
import store from '@/modules/work-code/work-code-store';
import WorkCodeAutocompleteInput from '@/modules/work-code/components/work-code-autocomplete-input.vue';

export default {
  components: {
    'app-work-code-autocomplete-input': WorkCodeAutocompleteInput,
  },
  routes,
  store,
};
