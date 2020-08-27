import Layout from '@/modules/layout/components/layout.vue';

const PayslipPage = () =>
  import(
    '@/modules/payslip/components/payslip-page.vue'
  );

export default [
  {
    path: '/payslip',
    exact: true,
    component: Layout,
    children: [
      {
        name: 'payslip',
        path: '',
        component: PayslipPage,
        exact: true,
        meta: { auth: true },
      },
    ],
  },
];
