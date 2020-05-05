import list from 'modules/workDone/list/workDoneListReducers';
import form from 'modules/workDone/form/workDoneFormReducers';
import view from 'modules/workDone/view/workDoneViewReducers';
import destroy from 'modules/workDone/destroy/workDoneDestroyReducers';
import importerReducer from 'modules/workDone/importer/workDoneImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
