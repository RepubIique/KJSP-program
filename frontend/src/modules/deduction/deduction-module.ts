import routes from '@/modules/deduction/deduction-routes';
import store from '@/modules/deduction/deduction-store';
import DeductionAutocompleteInput from '@/modules/deduction/components/deduction-autocomplete-input.vue';

export default {
  components: {
    'app-deduction-autocomplete-input': DeductionAutocompleteInput,
  },
  routes,
  store,
};
