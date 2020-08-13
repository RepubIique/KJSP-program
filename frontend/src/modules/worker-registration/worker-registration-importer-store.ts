import importerStore from '@/shared/importer/importer-store';
import { WorkerRegistrationService } from '@/modules/worker-registration/worker-registration-service';
import workerRegistrationImporterFields from '@/modules/worker-registration/worker-registration-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  WorkerRegistrationService.import,
  workerRegistrationImporterFields,
  i18n('entities.workerRegistration.importer.fileName'),
  i18n('entities.workerRegistration.importer.hint'),
);
