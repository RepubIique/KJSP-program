import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const WorkCodeListPage = () =>
  import(
    '@/modules/work-code/components/work-code-list-page.vue'
  );
const WorkCodeFormPage = () =>
  import(
    '@/modules/work-code/components/work-code-form-page.vue'
  );
const WorkCodeViewPage = () =>
  import(
    '@/modules/work-code/components/work-code-view-page.vue'
  );
const WorkCodeImporterPage = () =>
  import(
    '@/modules/work-code/components/work-code-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'workCode',
        path: '/work-code',
        component: WorkCodeListPage,
        meta: {
          auth: true,
          permission: Permissions.values.workCodeRead,
        },
      },
      {
        name: 'workCodeNew',
        path: '/work-code/new',
        component: WorkCodeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.workCodeCreate,
        },
      },
      {
        name: 'workCodeImporter',
        path: '/work-code/import',
        component: WorkCodeImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.workCodeImport,
        },
      },
      {
        name: 'workCodeEdit',
        path: '/work-code/:id/edit',
        component: WorkCodeFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.workCodeEdit,
        },
        props: true,
      },
      {
        name: 'workCodeView',
        path: '/work-code/:id',
        component: WorkCodeViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.workCodeRead,
        },
        props: true,
      },
    ],
  },
];
