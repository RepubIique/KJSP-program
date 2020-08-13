import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const TenantListPage = () =>
  import(
    '@/modules/tenant/components/tenant-list-page.vue'
  );
const TenantFormPage = () =>
  import(
    '@/modules/tenant/components/tenant-form-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'tenant',
        path: '/tenant',
        component: TenantListPage,
        meta: {
          auth: true,
        },
      },
      {
        name: 'tenantNew',
        path: '/tenant/new',
        component: TenantFormPage,
        meta: {
          auth: true,
        },
      },
      {
        name: 'tenantEdit',
        path: '/tenant/:id/edit',
        component: TenantFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.tenantEdit,
        },
        props: true,
      },
    ],
  },
];
