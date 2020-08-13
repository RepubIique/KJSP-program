import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const LocationListPage = () =>
  import(
    '@/modules/location/components/location-list-page.vue'
  );
const LocationFormPage = () =>
  import(
    '@/modules/location/components/location-form-page.vue'
  );
const LocationViewPage = () =>
  import(
    '@/modules/location/components/location-view-page.vue'
  );
const LocationImporterPage = () =>
  import(
    '@/modules/location/components/location-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'location',
        path: '/location',
        component: LocationListPage,
        meta: {
          auth: true,
          permission: Permissions.values.locationRead,
        },
      },
      {
        name: 'locationNew',
        path: '/location/new',
        component: LocationFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.locationCreate,
        },
      },
      {
        name: 'locationImporter',
        path: '/location/import',
        component: LocationImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.locationImport,
        },
      },
      {
        name: 'locationEdit',
        path: '/location/:id/edit',
        component: LocationFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.locationEdit,
        },
        props: true,
      },
      {
        name: 'locationView',
        path: '/location/:id',
        component: LocationViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.locationRead,
        },
        props: true,
      },
    ],
  },
];
