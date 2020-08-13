import importerStore from '@/shared/importer/importer-store';
import { WorkCodeService } from '@/modules/work-code/work-code-service';
import workCodeImporterFields from '@/modules/work-code/work-code-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  WorkCodeService.import,
  workCodeImporterFields,
  i18n('entities.workCode.importer.fileName'),
  i18n('entities.workCode.importer.hint'),
);
