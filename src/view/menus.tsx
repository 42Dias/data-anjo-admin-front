import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: 'fas fa-th-large',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: 'fas fa-user-plus',
  },

  {
    path: '/audit-logs',
    icon: 'fas fa-history',
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'fas fa-cog',
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/funeraria',
    permissionRequired: permissions.funerariaRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.funeraria.menu'),
  },

  {
    path: '/cerimonia',
    permissionRequired: permissions.cerimoniaRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.cerimonia.menu'),
  },  

  // {
  //   path: '/cerimoniaData',
  //   permissionRequired: permissions.cerimoniaDataRead,
  //   icon: 'fas fa-chevron-right',
  //   label: i18n('entities.cerimoniaData.menu'),
  // }, 
].filter(Boolean);
