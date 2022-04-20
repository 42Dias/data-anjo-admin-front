import list from 'src/modules/cerimoniaData/list/cerimoniaDataListReducers';
import form from 'src/modules/cerimoniaData/form/cerimoniaDataFormReducers';
import view from 'src/modules/cerimoniaData/view/cerimoniaDataViewReducers';
import destroy from 'src/modules/cerimoniaData/destroy/cerimoniaDataDestroyReducers';
import importerReducer from 'src/modules/cerimoniaData/importer/cerimoniaDataImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
