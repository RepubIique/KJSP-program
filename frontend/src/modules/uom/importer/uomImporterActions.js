import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/uom/importer/uomImporterSelectors';
import UomService from 'modules/uom/uomService';
import fields from 'modules/uom/importer/uomImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'UOM_IMPORTER',
  selectors,
  UomService.import,
  fields,
  i18n('entities.uom.importer.fileName'),
);
