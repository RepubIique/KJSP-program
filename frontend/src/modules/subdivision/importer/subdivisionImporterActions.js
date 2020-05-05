import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/subdivision/importer/subdivisionImporterSelectors';
import SubdivisionService from 'modules/subdivision/subdivisionService';
import fields from 'modules/subdivision/importer/subdivisionImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SUBDIVISION_IMPORTER',
  selectors,
  SubdivisionService.import,
  fields,
  i18n('entities.subdivision.importer.fileName'),
);
