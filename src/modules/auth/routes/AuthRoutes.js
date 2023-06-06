import Loadable from 'components/Loadable';
import { lazy } from 'react';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));

// ==============================|| MAIN ROUTING ||============================== //

const AuthRoutes = [
  {
    key: 'dashboard',
    path: 'dashboard',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <DashboardDefault />
  },
  {
    key: 'sample-page',
    path: 'sample-page',
    permission: 'authorization',
    element: <SamplePage />
  },
  {
    key: 'typography',
    path: 'typography',
    permission: 'authorization',
    element: <Typography />
  }
];

export default AuthRoutes;
