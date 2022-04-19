import list from 'src/modules/funeraria/list/funerariaListReducers';
import form from 'src/modules/funeraria/form/funerariaFormReducers';
import view from 'src/modules/funeraria/view/funerariaViewReducers';
import destroy from 'src/modules/funeraria/destroy/funerariaDestroyReducers';
import importerReducer from 'src/modules/funeraria/importer/funerariaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
