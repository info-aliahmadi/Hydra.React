import Loadable from 'components/Loadable';
import { lazy } from 'react';

const Setting = Loadable(lazy(() => import('modules/shared/pages/Settings')));

const ChangeLanguage = Loadable(lazy(() => import('modules/shared/pages/Language/ChangeLanguage')));


// ==============================|| MAIN ROUTING ||============================== //

const SharedRoutes = [
  {
    key: 'setting',
    path: 'setting',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <Setting />
  },
  {
    key: 'change-language',
    path: 'changelanguage',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ChangeLanguage />
  }
];

export default SharedRoutes;
