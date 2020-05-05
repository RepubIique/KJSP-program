import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/estate/importer/estateImporterSelectors';
import EstateService from 'modules/estate/estateService';
import fields from 'modules/estate/importer/estateImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'ESTATE_IMPORTER',
  selectors,
  EstateService.import,
  fields,
  i18n('entities.estate.importer.fileName'),
);
