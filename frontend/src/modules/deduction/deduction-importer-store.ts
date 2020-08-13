import importerStore from '@/shared/importer/importer-store';
import { DeductionService } from '@/modules/deduction/deduction-service';
import deductionImporterFields from '@/modules/deduction/deduction-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  DeductionService.import,
  deductionImporterFields,
  i18n('entities.deduction.importer.fileName'),
  i18n('entities.deduction.importer.hint'),
);
