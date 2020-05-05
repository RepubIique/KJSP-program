import list from 'modules/workcode/list/workcodeListReducers';
import form from 'modules/workcode/form/workcodeFormReducers';
import view from 'modules/workcode/view/workcodeViewReducers';
import destroy from 'modules/workcode/destroy/workcodeDestroyReducers';
import importerReducer from 'modules/workcode/importer/workcodeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
