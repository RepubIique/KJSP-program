import list from 'modules/deduction/list/deductionListReducers';
import form from 'modules/deduction/form/deductionFormReducers';
import view from 'modules/deduction/view/deductionViewReducers';
import destroy from 'modules/deduction/destroy/deductionDestroyReducers';
import importerReducer from 'modules/deduction/importer/deductionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
