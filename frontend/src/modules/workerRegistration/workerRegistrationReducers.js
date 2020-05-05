import list from 'modules/workerRegistration/list/workerRegistrationListReducers';
import form from 'modules/workerRegistration/form/workerRegistrationFormReducers';
import view from 'modules/workerRegistration/view/workerRegistrationViewReducers';
import destroy from 'modules/workerRegistration/destroy/workerRegistrationDestroyReducers';
import importerReducer from 'modules/workerRegistration/importer/workerRegistrationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
