import CerimoniaDataService from 'src/modules/cerimoniaData/cerimoniaDataService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CERIMONIADATA_VIEW';

const cerimoniadataViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cerimoniadataViewActions.FIND_STARTED,
      });

      const record = await CerimoniaDataService.find(id);

      dispatch({
        type: cerimoniadataViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniadataViewActions.FIND_ERROR,
      });

      getHistory().push('/cerimoniaData');
    }
  },
};

export default cerimoniadataViewActions;
