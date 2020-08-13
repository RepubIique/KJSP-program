import importerStore from '@/shared/importer/importer-store';
import { FfbService } from '@/modules/ffb/ffb-service';
import ffbImporterFields from '@/modules/ffb/ffb-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  FfbService.import,
  ffbImporterFields,
  i18n('entities.ffb.importer.fileName'),
  i18n('entities.ffb.importer.hint'),
);
