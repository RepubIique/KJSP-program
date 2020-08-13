import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const WorkerRegistrationListPage = () =>
  import(
    '@/modules/worker-registration/components/worker-registration-list-page.vue'
  );
const WorkerRegistrationFormPage = () =>
  import(
    '@/modules/worker-registration/components/worker-registration-form-page.vue'
  );
const WorkerRegistrationViewPage = () =>
  import(
    '@/modules/worker-registration/components/worker-registration-view-page.vue'
  );
const WorkerRegistrationImporterPage = () =>
  import(
    '@/modules/worker-registration/components/worker-registration-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'workerRegistration',
        path: '/worker-registration',
        component: WorkerRegistrationListPage,
        meta: {
          auth: true,
          permission: Permissions.values.workerRegistrationRead,
        },
      },
      {
        name: 'workerRegistrationNew',
        path: '/worker-registration/new',
        component: WorkerRegistrationFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.workerRegistrationCreate,
        },
      },
      {
        name: 'workerRegistrationImporter',
        path: '/worker-registration/import',
        component: WorkerRegistrationImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.workerRegistrationImport,
        },
      },
      {
        name: 'workerRegistrationEdit',
        path: '/worker-registration/:id/edit',
        component: WorkerRegistrationFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.workerRegistrationEdit,
        },
        props: true,
      },
      {
        name: 'workerRegistrationView',
        path: '/worker-registration/:id',
        component: WorkerRegistrationViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.workerRegistrationRead,
        },
        props: true,
      },
    ],
  },
];
