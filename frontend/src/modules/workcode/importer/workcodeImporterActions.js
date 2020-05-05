import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/workcode/importer/workcodeImporterSelectors';
import WorkcodeService from 'modules/workcode/workcodeService';
import fields from 'modules/workcode/importer/workcodeImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'WORKCODE_IMPORTER',
  selectors,
  WorkcodeService.import,
  fields,
  i18n('entities.workcode.importer.fileName'),
);
