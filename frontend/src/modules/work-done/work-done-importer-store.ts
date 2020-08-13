import importerStore from '@/shared/importer/importer-store';
import { WorkDoneService } from '@/modules/work-done/work-done-service';
import workDoneImporterFields from '@/modules/work-done/work-done-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  WorkDoneService.import,
  workDoneImporterFields,
  i18n('entities.workDone.importer.fileName'),
  i18n('entities.workDone.importer.hint'),
);
