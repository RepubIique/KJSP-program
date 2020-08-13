import importerStore from '@/shared/importer/importer-store';
import { LocationService } from '@/modules/location/location-service';
import locationImporterFields from '@/modules/location/location-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  LocationService.import,
  locationImporterFields,
  i18n('entities.location.importer.fileName'),
  i18n('entities.location.importer.hint'),
);
