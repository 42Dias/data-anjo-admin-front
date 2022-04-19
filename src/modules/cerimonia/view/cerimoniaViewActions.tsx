import CerimoniaService from 'src/modules/cerimonia/cerimoniaService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CERIMONIA_VIEW';

const cerimoniaViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cerimoniaViewActions.FIND_STARTED,
      });

      const record = await CerimoniaService.find(id);

      dispatch({
        type: cerimoniaViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniaViewActions.FIND_ERROR,
      });

      getHistory().push('/cerimonia');
    }
  },
};

export default cerimoniaViewActions;
