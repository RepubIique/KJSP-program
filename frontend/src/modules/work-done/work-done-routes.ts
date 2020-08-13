import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const WorkDoneListPage = () =>
  import(
    '@/modules/work-done/components/work-done-list-page.vue'
  );
const WorkDoneFormPage = () =>
  import(
    '@/modules/work-done/components/work-done-form-page.vue'
  );
const WorkDoneViewPage = () =>
  import(
    '@/modules/work-done/components/work-done-view-page.vue'
  );
const WorkDoneImporterPage = () =>
  import(
    '@/modules/work-done/components/work-done-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'workDone',
        path: '/work-done',
        component: WorkDoneListPage,
        meta: {
          auth: true,
          permission: Permissions.values.workDoneRead,
        },
      },
      {
        name: 'workDoneNew',
        path: '/work-done/new',
        component: WorkDoneFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.workDoneCreate,
        },
      },
      {
        name: 'workDoneImporter',
        path: '/work-done/import',
        component: WorkDoneImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.workDoneImport,
        },
      },
      {
        name: 'workDoneEdit',
        path: '/work-done/:id/edit',
        component: WorkDoneFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.workDoneEdit,
        },
        props: true,
      },
      {
        name: 'workDoneView',
        path: '/work-done/:id',
        component: WorkDoneViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.workDoneRead,
        },
        props: true,
      },
    ],
  },
];
