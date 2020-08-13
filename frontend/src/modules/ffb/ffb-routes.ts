import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const FfbListPage = () =>
  import(
    '@/modules/ffb/components/ffb-list-page.vue'
  );
const FfbFormPage = () =>
  import(
    '@/modules/ffb/components/ffb-form-page.vue'
  );
const FfbViewPage = () =>
  import(
    '@/modules/ffb/components/ffb-view-page.vue'
  );
const FfbImporterPage = () =>
  import(
    '@/modules/ffb/components/ffb-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'ffb',
        path: '/ffb',
        component: FfbListPage,
        meta: {
          auth: true,
          permission: Permissions.values.ffbRead,
        },
      },
      {
        name: 'ffbNew',
        path: '/ffb/new',
        component: FfbFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.ffbCreate,
        },
      },
      {
        name: 'ffbImporter',
        path: '/ffb/import',
        component: FfbImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.ffbImport,
        },
      },
      {
        name: 'ffbEdit',
        path: '/ffb/:id/edit',
        component: FfbFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.ffbEdit,
        },
        props: true,
      },
      {
        name: 'ffbView',
        path: '/ffb/:id',
        component: FfbViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.ffbRead,
        },
        props: true,
      },
    ],
  },
];
