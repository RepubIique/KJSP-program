import attendanceListStore from '@/modules/attendance/attendance-list-store';
import attendanceViewStore from '@/modules/attendance/attendance-view-store';
import attendanceImporterStore from '@/modules/attendance/attendance-importer-store';
import attendanceFormStore from '@/modules/attendance/attendance-form-store';
import attendanceDestroyStore from '@/modules/attendance/attendance-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: attendanceDestroyStore,
    form: attendanceFormStore,
    list: attendanceListStore,
    view: attendanceViewStore,
    importer: attendanceImporterStore,
  },
};
