import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/blocks/importer/blocksImporterSelectors';
import BlocksService from 'modules/blocks/blocksService';
import fields from 'modules/blocks/importer/blocksImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'BLOCKS_IMPORTER',
  selectors,
  BlocksService.import,
  fields,
  i18n('entities.blocks.importer.fileName'),
);
