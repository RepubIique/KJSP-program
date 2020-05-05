import list from 'modules/ffb/list/ffbListReducers';
import form from 'modules/ffb/form/ffbFormReducers';
import view from 'modules/ffb/view/ffbViewReducers';
import destroy from 'modules/ffb/destroy/ffbDestroyReducers';
import importerReducer from 'modules/ffb/importer/ffbImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
