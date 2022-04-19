import list from 'src/modules/cerimonia/list/cerimoniaListReducers';
import form from 'src/modules/cerimonia/form/cerimoniaFormReducers';
import view from 'src/modules/cerimonia/view/cerimoniaViewReducers';
import destroy from 'src/modules/cerimonia/destroy/cerimoniaDestroyReducers';
import importerReducer from 'src/modules/cerimonia/importer/cerimoniaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
