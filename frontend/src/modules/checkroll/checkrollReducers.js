import list from 'modules/checkroll/list/checkrollListReducers';
import form from 'modules/checkroll/form/checkrollFormReducers';
import view from 'modules/checkroll/view/checkrollViewReducers';
import destroy from 'modules/checkroll/destroy/checkrollDestroyReducers';
import importerReducer from 'modules/checkroll/importer/checkrollImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
