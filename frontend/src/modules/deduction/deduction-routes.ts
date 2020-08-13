import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const DeductionListPage = () =>
  import(
    '@/modules/deduction/components/deduction-list-page.vue'
  );
const DeductionFormPage = () =>
  import(
    '@/modules/deduction/components/deduction-form-page.vue'
  );
const DeductionViewPage = () =>
  import(
    '@/modules/deduction/components/deduction-view-page.vue'
  );
const DeductionImporterPage = () =>
  import(
    '@/modules/deduction/components/deduction-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'deduction',
        path: '/deduction',
        component: DeductionListPage,
        meta: {
          auth: true,
          permission: Permissions.values.deductionRead,
        },
      },
      {
        name: 'deductionNew',
        path: '/deduction/new',
        component: DeductionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.deductionCreate,
        },
      },
      {
        name: 'deductionImporter',
        path: '/deduction/import',
        component: DeductionImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.deductionImport,
        },
      },
      {
        name: 'deductionEdit',
        path: '/deduction/:id/edit',
        component: DeductionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.deductionEdit,
        },
        props: true,
      },
      {
        name: 'deductionView',
        path: '/deduction/:id',
        component: DeductionViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.deductionRead,
        },
        props: true,
      },
    ],
  },
];
