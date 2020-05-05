import list from 'modules/uom/list/uomListReducers';
import form from 'modules/uom/form/uomFormReducers';
import view from 'modules/uom/view/uomViewReducers';
import destroy from 'modules/uom/destroy/uomDestroyReducers';
import importerReducer from 'modules/uom/importer/uomImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
