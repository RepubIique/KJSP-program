import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/ffb/importer/ffbImporterSelectors';
import FfbService from 'modules/ffb/ffbService';
import fields from 'modules/ffb/importer/ffbImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'FFB_IMPORTER',
  selectors,
  FfbService.import,
  fields,
  i18n('entities.ffb.importer.fileName'),
);
