import Loadable from 'components/Loadable';
import { lazy } from 'react';

const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const CmsRoutes = [
  {
    key: 'color',
    path: 'color',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <Color />
  },
  {
    key: 'icons-ant',
    path: 'icons/ant',
    permission: 'authorization',
    element: <AntIcons />
  },
  {
    key: 'shadow',
    path: 'shadow',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <Shadow />
  }
];

export default CmsRoutes;
