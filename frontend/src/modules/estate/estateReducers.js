import list from 'modules/estate/list/estateListReducers';
import form from 'modules/estate/form/estateFormReducers';
import view from 'modules/estate/view/estateViewReducers';
import destroy from 'modules/estate/destroy/estateDestroyReducers';
import importerReducer from 'modules/estate/importer/estateImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
