import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/attendance/importer/attendanceImporterSelectors';
import AttendanceService from 'modules/attendance/attendanceService';
import fields from 'modules/attendance/importer/attendanceImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'ATTENDANCE_IMPORTER',
  selectors,
  AttendanceService.import,
  fields,
  i18n('entities.attendance.importer.fileName'),
);
