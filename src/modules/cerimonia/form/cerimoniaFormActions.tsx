import CerimoniaService from 'src/modules/cerimonia/cerimoniaService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CERIMONIA_FORM';

const cerimoniaFormActions = {
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
        type: cerimoniaFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CerimoniaService.find(id);
      }

      dispatch({
        type: cerimoniaFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniaFormActions.INIT_ERROR,
      });

      getHistory().push('/cerimonia');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: cerimoniaFormActions.CREATE_STARTED,
      });

      await CerimoniaService.create(values);

      dispatch({
        type: cerimoniaFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cerimonia.create.success'),
      );

      getHistory().push('/cerimonia');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniaFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: cerimoniaFormActions.UPDATE_STARTED,
      });

      await CerimoniaService.update(id, values);

      dispatch({
        type: cerimoniaFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cerimonia.update.success'),
      );

      getHistory().push('/cerimonia');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cerimoniaFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default cerimoniaFormActions;
