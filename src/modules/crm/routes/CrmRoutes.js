import Loadable from 'components/Loadable';
import { lazy } from 'react';

const MessagesInbox = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesInbox')));

// const MessagesTrashList = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesTrashList')));

// ==============================|| MAIN ROUTING ||============================== //

const CrmRoutes = [
  {
    key: 'messagesInbox',
    path: 'messagesInbox',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <MessagesInbox />
  }
  // {
  //   key: 'messagesTrash',
  //   path: 'messagesTrash',
  //   permission: 'AUTH_GET.PERMISSION.LIST',
  //   element: <MessagesTrashList />
  // }
];

export default CrmRoutes;
