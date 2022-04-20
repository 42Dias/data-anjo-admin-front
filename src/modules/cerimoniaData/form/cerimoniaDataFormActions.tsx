import CerimoniaDataService from 'src/modules/cerimoniaData/cerimoniaDataService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CERIMONIADATA_FORM';

const cerimoniadataFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cerimoniadataFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CerimoniaDataService.find(id);
      }

      dispatch({
        type: cerimoniadataFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniadataFormActions.INIT_ERROR,
      });

      getHistory().push('/cerimoniaData');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: cerimoniadataFormActions.CREATE_STARTED,
      });

      await CerimoniaDataService.create(values);

      dispatch({
        type: cerimoniadataFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cerimoniaData.create.success'),
      );

      getHistory().push('/cerimoniaData');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniadataFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: cerimoniadataFormActions.UPDATE_STARTED,
      });

      await CerimoniaDataService.update(id, values);

      dispatch({
        type: cerimoniadataFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cerimoniaData.update.success'),
      );

      getHistory().push('/cerimoniaData');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniadataFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default cerimoniadataFormActions;
