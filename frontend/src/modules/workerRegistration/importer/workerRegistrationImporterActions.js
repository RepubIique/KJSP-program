import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/workerRegistration/importer/workerRegistrationImporterSelectors';
import WorkerRegistrationService from 'modules/workerRegistration/workerRegistrationService';
import fields from 'modules/workerRegistration/importer/workerRegistrationImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'WORKERREGISTRATION_IMPORTER',
  selectors,
  WorkerRegistrationService.import,
  fields,
  i18n('entities.workerRegistration.importer.fileName'),
);
