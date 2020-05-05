import list from 'modules/designation/list/designationListReducers';
import form from 'modules/designation/form/designationFormReducers';
import view from 'modules/designation/view/designationViewReducers';
import destroy from 'modules/designation/destroy/designationDestroyReducers';
import importerReducer from 'modules/designation/importer/designationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
