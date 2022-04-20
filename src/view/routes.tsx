import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/funeraria',
    loader: () =>
      import('src/view/funeraria/list/FunerariaListPage'),
    permissionRequired: permissions.funerariaRead,
    exact: true,
  },
  {
    path: '/funeraria/new',
    loader: () =>
      import('src/view/funeraria/form/FunerariaFormPage'),
    permissionRequired: permissions.funerariaCreate,
    exact: true,
  },
  {
    path: '/funeraria/importer',
    loader: () =>
      import(
        'src/view/funeraria/importer/FunerariaImporterPage'
      ),
    permissionRequired: permissions.funerariaImport,
    exact: true,
  },
  {
    path: '/funeraria/:id/edit',
    loader: () =>
      import('src/view/funeraria/form/FunerariaFormPage'),
    permissionRequired: permissions.funerariaEdit,
    exact: true,
  },
  {
    path: '/funeraria/:id',
    loader: () =>
      import('src/view/funeraria/view/FunerariaViewPage'),
    permissionRequired: permissions.funerariaRead,
    exact: true,
  },

  {
    path: '/cerimonia',
    loader: () =>
      import('src/view/cerimonia/list/CerimoniaListPage'),
    permissionRequired: permissions.cerimoniaRead,
    exact: true,
  },
  {
    path: '/cerimonia/presenca/',
    loader: () =>
      import('src/view/cerimoniaData/list/CerimoniaDataListPage'),
    permissionRequired: permissions.cerimoniaDataRead,
    exact: true,
  },

  {
    path: '/cerimonia/presenca/:id',
    loader: () =>
      import('src/view/cerimoniaData/list/CerimoniaDataListPage'),
    permissionRequired: permissions.cerimoniaDataRead,
    exact: true,
  },


  {
    path: '/cerimonia/presenca/new',
    loader: () =>
      import('src/view/cerimoniaData/form/CerimoniaDataForm'),
    permissionRequired: permissions.cerimoniaDataCreate,
    exact: true,
  },

  {
    path: '/cerimonia/presenca/edit/:id',
    loader: () =>
      import('src/view/cerimoniaData/form/CerimoniaDataForm'),
    permissionRequired: permissions.cerimoniaDataEdit,
    exact: true,
  },

  {
    path: '/cerimonia/presenca/importer',
    loader: () =>
      import('src/view/cerimoniaData/importer/CerimoniaDataImporterPage'),
    permissionRequired: permissions.cerimoniaDataImport,
    exact: true,
  },

  {
    path: '/cerimonia/new',
    loader: () =>
      import('src/view/cerimonia/form/CerimoniaFormPage'),
    permissionRequired: permissions.cerimoniaCreate,
    exact: true,
  },
  {
    path: '/cerimonia/importer',
    loader: () =>
      import(
        'src/view/cerimonia/importer/CerimoniaImporterPage'
      ),
    permissionRequired: permissions.cerimoniaImport,
    exact: true,
  },
  {
    path: '/cerimonia/:id/edit',
    loader: () =>
      import('src/view/cerimonia/form/CerimoniaFormPage'),
    permissionRequired: permissions.cerimoniaEdit,
    exact: true,
  },
  {
    path: '/cerimonia/:id',
    loader: () =>
      import('src/view/cerimonia/view/CerimoniaViewPage'),
    permissionRequired: permissions.cerimoniaRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
