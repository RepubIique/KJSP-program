import Permissions from 'security/permissions';
import { i18n } from 'i18n';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: <HomeIcon />,
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: <PersonAddIcon />,
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/attendance',
    loader: () => import('view/attendance/list/AttendanceListPage'),
    permissionRequired: permissions.attendanceRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.attendance.menu'),
    menu: true,
  },
  {
    path: '/attendance/new',
    loader: () => import('view/attendance/form/AttendanceFormPage'),
    menu: false,
    permissionRequired: permissions.attendanceCreate,
    exact: true,
  },
  {
    path: '/attendance/importer',
    loader: () =>
      import('view/attendance/importer/AttendanceImporterPage'),
    menu: false,
    permissionRequired: permissions.attendanceImport,
    exact: true,
  },
  {
    path: '/attendance/:id/edit',
    loader: () => import('view/attendance/form/AttendanceFormPage'),
    menu: false,
    permissionRequired: permissions.attendanceEdit,
    exact: true,
  },
  {
    path: '/attendance/:id',
    loader: () => import('view/attendance/view/AttendanceViewPage'),
    menu: false,
    permissionRequired: permissions.attendanceRead,
    exact: true,
  },

  {
    path: '/deduction',
    loader: () => import('view/deduction/list/DeductionListPage'),
    permissionRequired: permissions.deductionRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.deduction.menu'),
    menu: true,
  },
  {
    path: '/deduction/new',
    loader: () => import('view/deduction/form/DeductionFormPage'),
    menu: false,
    permissionRequired: permissions.deductionCreate,
    exact: true,
  },
  {
    path: '/deduction/importer',
    loader: () =>
      import('view/deduction/importer/DeductionImporterPage'),
    menu: false,
    permissionRequired: permissions.deductionImport,
    exact: true,
  },
  {
    path: '/deduction/:id/edit',
    loader: () => import('view/deduction/form/DeductionFormPage'),
    menu: false,
    permissionRequired: permissions.deductionEdit,
    exact: true,
  },
  {
    path: '/deduction/:id',
    loader: () => import('view/deduction/view/DeductionViewPage'),
    menu: false,
    permissionRequired: permissions.deductionRead,
    exact: true,
  },

  {
    path: '/worker-registration',
    loader: () => import('view/workerRegistration/list/WorkerRegistrationListPage'),
    permissionRequired: permissions.workerRegistrationRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.workerRegistration.menu'),
    menu: true,
  },
  {
    path: '/worker-registration/new',
    loader: () => import('view/workerRegistration/form/WorkerRegistrationFormPage'),
    menu: false,
    permissionRequired: permissions.workerRegistrationCreate,
    exact: true,
  },
  {
    path: '/worker-registration/importer',
    loader: () =>
      import('view/workerRegistration/importer/WorkerRegistrationImporterPage'),
    menu: false,
    permissionRequired: permissions.workerRegistrationImport,
    exact: true,
  },
  {
    path: '/worker-registration/:id/edit',
    loader: () => import('view/workerRegistration/form/WorkerRegistrationFormPage'),
    menu: false,
    permissionRequired: permissions.workerRegistrationEdit,
    exact: true,
  },
  {
    path: '/worker-registration/:id',
    loader: () => import('view/workerRegistration/view/WorkerRegistrationViewPage'),
    menu: false,
    permissionRequired: permissions.workerRegistrationRead,
    exact: true,
  },

  {
    path: '/work-done',
    loader: () => import('view/workDone/list/WorkDoneListPage'),
    permissionRequired: permissions.workDoneRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.workDone.menu'),
    menu: true,
  },
  {
    path: '/work-done/new',
    loader: () => import('view/workDone/form/WorkDoneFormPage'),
    menu: false,
    permissionRequired: permissions.workDoneCreate,
    exact: true,
  },
  {
    path: '/work-done/importer',
    loader: () =>
      import('view/workDone/importer/WorkDoneImporterPage'),
    menu: false,
    permissionRequired: permissions.workDoneImport,
    exact: true,
  },
  {
    path: '/work-done/:id/edit',
    loader: () => import('view/workDone/form/WorkDoneFormPage'),
    menu: false,
    permissionRequired: permissions.workDoneEdit,
    exact: true,
  },
  {
    path: '/work-done/:id',
    loader: () => import('view/workDone/view/WorkDoneViewPage'),
    menu: false,
    permissionRequired: permissions.workDoneRead,
    exact: true,
  },

  {
    path: '/ffb',
    loader: () => import('view/ffb/list/FfbListPage'),
    permissionRequired: permissions.ffbRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.ffb.menu'),
    menu: true,
  },
  {
    path: '/ffb/new',
    loader: () => import('view/ffb/form/FfbFormPage'),
    menu: false,
    permissionRequired: permissions.ffbCreate,
    exact: true,
  },
  {
    path: '/ffb/importer',
    loader: () =>
      import('view/ffb/importer/FfbImporterPage'),
    menu: false,
    permissionRequired: permissions.ffbImport,
    exact: true,
  },
  {
    path: '/ffb/:id/edit',
    loader: () => import('view/ffb/form/FfbFormPage'),
    menu: false,
    permissionRequired: permissions.ffbEdit,
    exact: true,
  },
  {
    path: '/ffb/:id',
    loader: () => import('view/ffb/view/FfbViewPage'),
    menu: false,
    permissionRequired: permissions.ffbRead,
    exact: true,
  },

  {
    path: '/checkroll',
    loader: () => import('view/checkroll/list/CheckrollListPage'),
    permissionRequired: permissions.checkrollRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.checkroll.menu'),
    menu: true,
  },
  {
    path: '/checkroll/new',
    loader: () => import('view/checkroll/form/CheckrollFormPage'),
    menu: false,
    permissionRequired: permissions.checkrollCreate,
    exact: true,
  },
  {
    path: '/checkroll/importer',
    loader: () =>
      import('view/checkroll/importer/CheckrollImporterPage'),
    menu: false,
    permissionRequired: permissions.checkrollImport,
    exact: true,
  },
  {
    path: '/checkroll/:id/edit',
    loader: () => import('view/checkroll/form/CheckrollFormPage'),
    menu: false,
    permissionRequired: permissions.checkrollEdit,
    exact: true,
  },
  {
    path: '/checkroll/:id',
    loader: () => import('view/checkroll/view/CheckrollViewPage'),
    menu: false,
    permissionRequired: permissions.checkrollRead,
    exact: true,
  },

  {
    path: '/subdivision',
    loader: () => import('view/subdivision/list/SubdivisionListPage'),
    permissionRequired: permissions.subdivisionRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.subdivision.menu'),
    menu: true,
  },
  {
    path: '/subdivision/new',
    loader: () => import('view/subdivision/form/SubdivisionFormPage'),
    menu: false,
    permissionRequired: permissions.subdivisionCreate,
    exact: true,
  },
  {
    path: '/subdivision/importer',
    loader: () =>
      import('view/subdivision/importer/SubdivisionImporterPage'),
    menu: false,
    permissionRequired: permissions.subdivisionImport,
    exact: true,
  },
  {
    path: '/subdivision/:id/edit',
    loader: () => import('view/subdivision/form/SubdivisionFormPage'),
    menu: false,
    permissionRequired: permissions.subdivisionEdit,
    exact: true,
  },
  {
    path: '/subdivision/:id',
    loader: () => import('view/subdivision/view/SubdivisionViewPage'),
    menu: false,
    permissionRequired: permissions.subdivisionRead,
    exact: true,
  },

  {
    path: '/workcode',
    loader: () => import('view/workcode/list/WorkcodeListPage'),
    permissionRequired: permissions.workcodeRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.workcode.menu'),
    menu: true,
  },
  {
    path: '/workcode/new',
    loader: () => import('view/workcode/form/WorkcodeFormPage'),
    menu: false,
    permissionRequired: permissions.workcodeCreate,
    exact: true,
  },
  {
    path: '/workcode/importer',
    loader: () =>
      import('view/workcode/importer/WorkcodeImporterPage'),
    menu: false,
    permissionRequired: permissions.workcodeImport,
    exact: true,
  },
  {
    path: '/workcode/:id/edit',
    loader: () => import('view/workcode/form/WorkcodeFormPage'),
    menu: false,
    permissionRequired: permissions.workcodeEdit,
    exact: true,
  },
  {
    path: '/workcode/:id',
    loader: () => import('view/workcode/view/WorkcodeViewPage'),
    menu: false,
    permissionRequired: permissions.workcodeRead,
    exact: true,
  },

  {
    path: '/week',
    loader: () => import('view/week/list/WeekListPage'),
    permissionRequired: permissions.weekRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.week.menu'),
    menu: true,
  },
  {
    path: '/week/new',
    loader: () => import('view/week/form/WeekFormPage'),
    menu: false,
    permissionRequired: permissions.weekCreate,
    exact: true,
  },
  {
    path: '/week/importer',
    loader: () =>
      import('view/week/importer/WeekImporterPage'),
    menu: false,
    permissionRequired: permissions.weekImport,
    exact: true,
  },
  {
    path: '/week/:id/edit',
    loader: () => import('view/week/form/WeekFormPage'),
    menu: false,
    permissionRequired: permissions.weekEdit,
    exact: true,
  },
  {
    path: '/week/:id',
    loader: () => import('view/week/view/WeekViewPage'),
    menu: false,
    permissionRequired: permissions.weekRead,
    exact: true,
  },

  {
    path: '/estate',
    loader: () => import('view/estate/list/EstateListPage'),
    permissionRequired: permissions.estateRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.estate.menu'),
    menu: true,
  },
  {
    path: '/estate/new',
    loader: () => import('view/estate/form/EstateFormPage'),
    menu: false,
    permissionRequired: permissions.estateCreate,
    exact: true,
  },
  {
    path: '/estate/importer',
    loader: () =>
      import('view/estate/importer/EstateImporterPage'),
    menu: false,
    permissionRequired: permissions.estateImport,
    exact: true,
  },
  {
    path: '/estate/:id/edit',
    loader: () => import('view/estate/form/EstateFormPage'),
    menu: false,
    permissionRequired: permissions.estateEdit,
    exact: true,
  },
  {
    path: '/estate/:id',
    loader: () => import('view/estate/view/EstateViewPage'),
    menu: false,
    permissionRequired: permissions.estateRead,
    exact: true,
  },

  {
    path: '/mill',
    loader: () => import('view/mill/list/MillListPage'),
    permissionRequired: permissions.millRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.mill.menu'),
    menu: true,
  },
  {
    path: '/mill/new',
    loader: () => import('view/mill/form/MillFormPage'),
    menu: false,
    permissionRequired: permissions.millCreate,
    exact: true,
  },
  {
    path: '/mill/importer',
    loader: () =>
      import('view/mill/importer/MillImporterPage'),
    menu: false,
    permissionRequired: permissions.millImport,
    exact: true,
  },
  {
    path: '/mill/:id/edit',
    loader: () => import('view/mill/form/MillFormPage'),
    menu: false,
    permissionRequired: permissions.millEdit,
    exact: true,
  },
  {
    path: '/mill/:id',
    loader: () => import('view/mill/view/MillViewPage'),
    menu: false,
    permissionRequired: permissions.millRead,
    exact: true,
  },

  {
    path: '/designation',
    loader: () => import('view/designation/list/DesignationListPage'),
    permissionRequired: permissions.designationRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.designation.menu'),
    menu: true,
  },
  {
    path: '/designation/new',
    loader: () => import('view/designation/form/DesignationFormPage'),
    menu: false,
    permissionRequired: permissions.designationCreate,
    exact: true,
  },
  {
    path: '/designation/importer',
    loader: () =>
      import('view/designation/importer/DesignationImporterPage'),
    menu: false,
    permissionRequired: permissions.designationImport,
    exact: true,
  },
  {
    path: '/designation/:id/edit',
    loader: () => import('view/designation/form/DesignationFormPage'),
    menu: false,
    permissionRequired: permissions.designationEdit,
    exact: true,
  },
  {
    path: '/designation/:id',
    loader: () => import('view/designation/view/DesignationViewPage'),
    menu: false,
    permissionRequired: permissions.designationRead,
    exact: true,
  },

  {
    path: '/blocks',
    loader: () => import('view/blocks/list/BlocksListPage'),
    permissionRequired: permissions.blocksRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.blocks.menu'),
    menu: true,
  },
  {
    path: '/blocks/new',
    loader: () => import('view/blocks/form/BlocksFormPage'),
    menu: false,
    permissionRequired: permissions.blocksCreate,
    exact: true,
  },
  {
    path: '/blocks/importer',
    loader: () =>
      import('view/blocks/importer/BlocksImporterPage'),
    menu: false,
    permissionRequired: permissions.blocksImport,
    exact: true,
  },
  {
    path: '/blocks/:id/edit',
    loader: () => import('view/blocks/form/BlocksFormPage'),
    menu: false,
    permissionRequired: permissions.blocksEdit,
    exact: true,
  },
  {
    path: '/blocks/:id',
    loader: () => import('view/blocks/view/BlocksViewPage'),
    menu: false,
    permissionRequired: permissions.blocksRead,
    exact: true,
  },

  {
    path: '/uom',
    loader: () => import('view/uom/list/UomListPage'),
    permissionRequired: permissions.uomRead,
    exact: true,
    icon: <ChevronRightIcon />,
    label: i18n('entities.uom.menu'),
    menu: true,
  },
  {
    path: '/uom/new',
    loader: () => import('view/uom/form/UomFormPage'),
    menu: false,
    permissionRequired: permissions.uomCreate,
    exact: true,
  },
  {
    path: '/uom/importer',
    loader: () =>
      import('view/uom/importer/UomImporterPage'),
    menu: false,
    permissionRequired: permissions.uomImport,
    exact: true,
  },
  {
    path: '/uom/:id/edit',
    loader: () => import('view/uom/form/UomFormPage'),
    menu: false,
    permissionRequired: permissions.uomEdit,
    exact: true,
  },
  {
    path: '/uom/:id',
    loader: () => import('view/uom/view/UomViewPage'),
    menu: false,
    permissionRequired: permissions.uomRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
