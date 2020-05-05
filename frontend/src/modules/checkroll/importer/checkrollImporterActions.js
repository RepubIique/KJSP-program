import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/checkroll/importer/checkrollImporterSelectors';
import CheckrollService from 'modules/checkroll/checkrollService';
import fields from 'modules/checkroll/importer/checkrollImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'CHECKROLL_IMPORTER',
  selectors,
  CheckrollService.import,
  fields,
  i18n('entities.checkroll.importer.fileName'),
);
