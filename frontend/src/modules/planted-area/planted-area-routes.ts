import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const PlantedAreaListPage = () =>
  import(
    '@/modules/planted-area/components/planted-area-list-page.vue'
  );
const PlantedAreaFormPage = () =>
  import(
    '@/modules/planted-area/components/planted-area-form-page.vue'
  );
const PlantedAreaViewPage = () =>
  import(
    '@/modules/planted-area/components/planted-area-view-page.vue'
  );
const PlantedAreaImporterPage = () =>
  import(
    '@/modules/planted-area/components/planted-area-importer-page.vue'
  );

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'plantedArea',
        path: '/planted-area',
        component: PlantedAreaListPage,
        meta: {
          auth: true,
          permission: Permissions.values.plantedAreaRead,
        },
      },
      {
        name: 'plantedAreaNew',
        path: '/planted-area/new',
        component: PlantedAreaFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.plantedAreaCreate,
        },
      },
      {
        name: 'plantedAreaImporter',
        path: '/planted-area/import',
        component: PlantedAreaImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.plantedAreaImport,
        },
      },
      {
        name: 'plantedAreaEdit',
        path: '/planted-area/:id/edit',
        component: PlantedAreaFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.plantedAreaEdit,
        },
        props: true,
      },
      {
        name: 'plantedAreaView',
        path: '/planted-area/:id',
        component: PlantedAreaViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.plantedAreaRead,
        },
        props: true,
      },
    ],
  },
];
