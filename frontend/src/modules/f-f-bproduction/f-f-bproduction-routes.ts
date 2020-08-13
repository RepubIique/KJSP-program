import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const FFBproductionListPage = () =>
  import(
    '@/modules/f-f-bproduction/components/f-f-bproduction-list-page.vue'
  );
const FFBproductionFormPage = () =>
  import(
    '@/modules/f-f-bproduction/components/f-f-bproduction-form-page.vue'
  );
const FFBproductionViewPage = () =>
  import(
    '@/modules/f-f-bproduction/components/f-f-bproduction-view-page.vue'
  );
const FFBproductionImporterPage = () =>
  import(
    '@/modules/f-f-bproduction/components/f-f-bproduction-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'fFBproduction',
        path: '/f-f-bproduction',
        component: FFBproductionListPage,
        meta: {
          auth: true,
          permission: Permissions.values.fFBproductionRead,
        },
      },
      {
        name: 'fFBproductionNew',
        path: '/f-f-bproduction/new',
        component: FFBproductionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.fFBproductionCreate,
        },
      },
      {
        name: 'fFBproductionImporter',
        path: '/f-f-bproduction/import',
        component: FFBproductionImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.fFBproductionImport,
        },
      },
      {
        name: 'fFBproductionEdit',
        path: '/f-f-bproduction/:id/edit',
        component: FFBproductionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.fFBproductionEdit,
        },
        props: true,
      },
      {
        name: 'fFBproductionView',
        path: '/f-f-bproduction/:id',
        component: FFBproductionViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.fFBproductionRead,
        },
        props: true,
      },
    ],
  },
];
