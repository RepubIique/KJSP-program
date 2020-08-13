import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const UserListPage = () =>
  import('@/modules/user/components/user-list-page.vue');
const UserNewPage = () =>
  import('@/modules/user/components/user-new-page.vue');
const UserEditPage = () =>
  import('@/modules/user/components/user-edit-page.vue');
const UserViewPage = () =>
  import('@/modules/user/components/user-view-page.vue');
const UserImporterPage = () =>
  import('@/modules/user/components/user-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'user',
        path: '/user',
        component: UserListPage,
        meta: {
          auth: true,
          permission: Permissions.values.userRead,
        },
      },
      {
        name: 'userNew',
        path: '/user/new',
        component: UserNewPage,
        meta: {
          auth: true,
          permission: Permissions.values.userCreate,
        },
      },
      {
        name: 'userImporter',
        path: '/user/import',
        component: UserImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.userImport,
        },
      },
      {
        name: 'userEdit',
        path: '/user/:id/edit',
        component: UserEditPage,
        meta: {
          auth: true,
          permission: Permissions.values.userEdit,
        },
        props: true,
      },
      {
        name: 'userView',
        path: '/user/:id',
        component: UserViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.userRead,
        },
        props: true,
      },
    ],
  },
];
