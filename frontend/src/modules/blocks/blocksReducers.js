import list from 'modules/blocks/list/blocksListReducers';
import form from 'modules/blocks/form/blocksFormReducers';
import view from 'modules/blocks/view/blocksViewReducers';
import destroy from 'modules/blocks/destroy/blocksDestroyReducers';
import importerReducer from 'modules/blocks/importer/blocksImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
