import routes from '@/modules/work-done/work-done-routes';
import store from '@/modules/work-done/work-done-store';
import WorkDoneAutocompleteInput from '@/modules/work-done/components/work-done-autocomplete-input.vue';

export default {
  components: {
    'app-work-done-autocomplete-input': WorkDoneAutocompleteInput,
  },
  routes,
  store,
};
