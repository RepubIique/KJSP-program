import importerStore from '@/shared/importer/importer-store';
import { AttendanceService } from '@/modules/attendance/attendance-service';
import attendanceImporterFields from '@/modules/attendance/attendance-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  AttendanceService.import,
  attendanceImporterFields,
  i18n('entities.attendance.importer.fileName'),
  i18n('entities.attendance.importer.hint'),
);
