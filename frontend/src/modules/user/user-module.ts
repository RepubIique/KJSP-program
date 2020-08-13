import routes from '@/modules/user/user-routes';
import store from '@/modules/user/user-store';
import UserAutocompleteInput from '@/modules/user/components/user-autocomplete-input.vue';

export default {
  components: {
    'app-user-autocomplete-input': UserAutocompleteInput,
  },
  routes,
  store,
};
