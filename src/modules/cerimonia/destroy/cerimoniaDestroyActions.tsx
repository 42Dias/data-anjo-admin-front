import listActions from 'src/modules/cerimonia/list/cerimoniaListActions';
import CerimoniaService from 'src/modules/cerimonia/cerimoniaService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CERIMONIA_DESTROY';

const cerimoniaDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cerimoniaDestroyActions.DESTROY_STARTED,
      });

      await CerimoniaService.destroyAll([id]);

      dispatch({
        type: cerimoniaDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.cerimonia.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/cerimonia');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: cerimoniaDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: cerimoniaDestroyActions.DESTROY_ALL_STARTED,
      });

      await CerimoniaService.destroyAll(ids);

      dispatch({
        type: cerimoniaDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.cerimonia.destroyAll.success'),
      );

      getHistory().push('/cerimonia');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: cerimoniaDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default cerimoniaDestroyActions;
