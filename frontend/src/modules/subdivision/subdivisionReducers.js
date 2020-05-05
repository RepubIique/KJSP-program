import list from 'modules/subdivision/list/subdivisionListReducers';
import form from 'modules/subdivision/form/subdivisionFormReducers';
import view from 'modules/subdivision/view/subdivisionViewReducers';
import destroy from 'modules/subdivision/destroy/subdivisionDestroyReducers';
import importerReducer from 'modules/subdivision/importer/subdivisionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
