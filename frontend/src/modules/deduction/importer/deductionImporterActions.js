import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/deduction/importer/deductionImporterSelectors';
import DeductionService from 'modules/deduction/deductionService';
import fields from 'modules/deduction/importer/deductionImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'DEDUCTION_IMPORTER',
  selectors,
  DeductionService.import,
  fields,
  i18n('entities.deduction.importer.fileName'),
);
