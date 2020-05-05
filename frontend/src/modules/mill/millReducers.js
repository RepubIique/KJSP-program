import list from 'modules/mill/list/millListReducers';
import form from 'modules/mill/form/millFormReducers';
import view from 'modules/mill/view/millViewReducers';
import destroy from 'modules/mill/destroy/millDestroyReducers';
import importerReducer from 'modules/mill/importer/millImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
