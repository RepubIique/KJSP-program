import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/workDone/importer/workDoneImporterSelectors';
import WorkDoneService from 'modules/workDone/workDoneService';
import fields from 'modules/workDone/importer/workDoneImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'WORKDONE_IMPORTER',
  selectors,
  WorkDoneService.import,
  fields,
  i18n('entities.workDone.importer.fileName'),
);
