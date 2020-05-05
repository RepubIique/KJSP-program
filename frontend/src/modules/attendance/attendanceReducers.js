import list from 'modules/attendance/list/attendanceListReducers';
import form from 'modules/attendance/form/attendanceFormReducers';
import view from 'modules/attendance/view/attendanceViewReducers';
import destroy from 'modules/attendance/destroy/attendanceDestroyReducers';
import importerReducer from 'modules/attendance/importer/attendanceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
