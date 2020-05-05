import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/designation/importer/designationImporterSelectors';
import DesignationService from 'modules/designation/designationService';
import fields from 'modules/designation/importer/designationImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'DESIGNATION_IMPORTER',
  selectors,
  DesignationService.import,
  fields,
  i18n('entities.designation.importer.fileName'),
);
