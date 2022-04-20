import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import funeraria from 'src/modules/funeraria/funerariaReducers';
import cerimonia from 'src/modules/cerimonia/cerimoniaReducers';
import cerimoniaData from 'src/modules/cerimoniaData/cerimoniaDataReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    funeraria,
    cerimonia,
    cerimoniaData
  });
