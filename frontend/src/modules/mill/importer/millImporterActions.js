import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/mill/importer/millImporterSelectors';
import MillService from 'modules/mill/millService';
import fields from 'modules/mill/importer/millImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'MILL_IMPORTER',
  selectors,
  MillService.import,
  fields,
  i18n('entities.mill.importer.fileName'),
);
