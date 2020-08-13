import routes from '@/modules/attendance/attendance-routes';
import store from '@/modules/attendance/attendance-store';
import AttendanceAutocompleteInput from '@/modules/attendance/components/attendance-autocomplete-input.vue';

export default {
  components: {
    'app-attendance-autocomplete-input': AttendanceAutocompleteInput,
  },
  routes,
  store,
};
