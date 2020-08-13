import importerStore from '@/shared/importer/importer-store';
import { PlantedAreaService } from '@/modules/planted-area/planted-area-service';
import plantedAreaImporterFields from '@/modules/planted-area/planted-area-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  PlantedAreaService.import,
  plantedAreaImporterFields,
  i18n('entities.plantedArea.importer.fileName'),
  i18n('entities.plantedArea.importer.hint'),
);
