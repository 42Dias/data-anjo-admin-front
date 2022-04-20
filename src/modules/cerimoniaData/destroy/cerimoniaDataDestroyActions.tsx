import listActions from 'src/modules/cerimoniaData/list/cerimoniaDataListActions';
import CerimoniaDataService from 'src/modules/cerimoniaData/cerimoniaDataService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CERIMONIADATA_DESTROY';

const CerimoniadataDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: CerimoniadataDestroyActions.DESTROY_STARTED,
      });

      await CerimoniaDataService.destroyAll([id]);

      dispatch({
        type: CerimoniadataDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.cerimoniaData.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/cerimoniaData');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: CerimoniadataDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: CerimoniadataDestroyActions.DESTROY_ALL_STARTED,
      });

      await CerimoniaDataService.destroyAll(ids);

      dispatch({
        type: CerimoniadataDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.cerimoniaData.destroyAll.success'),
      );

      getHistory().push('/cerimoniaData');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: CerimoniadataDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default CerimoniadataDestroyActions;
