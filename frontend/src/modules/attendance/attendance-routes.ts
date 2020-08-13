import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const AttendanceListPage = () =>
  import(
    '@/modules/attendance/components/attendance-list-page.vue'
  );
const AttendanceFormPage = () =>
  import(
    '@/modules/attendance/components/attendance-form-page.vue'
  );
const AttendanceViewPage = () =>
  import(
    '@/modules/attendance/components/attendance-view-page.vue'
  );
const AttendanceImporterPage = () =>
  import(
    '@/modules/attendance/components/attendance-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'attendance',
        path: '/attendance',
        component: AttendanceListPage,
        meta: {
          auth: true,
          permission: Permissions.values.attendanceRead,
        },
      },
      {
        name: 'attendanceNew',
        path: '/attendance/new',
        component: AttendanceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.attendanceCreate,
        },
      },
      {
        name: 'attendanceImporter',
        path: '/attendance/import',
        component: AttendanceImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.attendanceImport,
        },
      },
      {
        name: 'attendanceEdit',
        path: '/attendance/:id/edit',
        component: AttendanceFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.attendanceEdit,
        },
        props: true,
      },
      {
        name: 'attendanceView',
        path: '/attendance/:id',
        component: AttendanceViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.attendanceRead,
        },
        props: true,
      },
    ],
  },
];
