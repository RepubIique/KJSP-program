import importerStore from '@/shared/importer/importer-store';
import { FFBproductionService } from '@/modules/f-f-bproduction/f-f-bproduction-service';
import fFBproductionImporterFields from '@/modules/f-f-bproduction/f-f-bproduction-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  FFBproductionService.import,
  fFBproductionImporterFields,
  i18n('entities.fFBproduction.importer.fileName'),
  i18n('entities.fFBproduction.importer.hint'),
);
