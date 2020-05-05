import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/week/importer/weekImporterSelectors';
import WeekService from 'modules/week/weekService';
import fields from 'modules/week/importer/weekImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'WEEK_IMPORTER',
  selectors,
  WeekService.import,
  fields,
  i18n('entities.week.importer.fileName'),
);
