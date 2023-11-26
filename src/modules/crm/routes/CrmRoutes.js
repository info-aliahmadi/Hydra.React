import Loadable from 'components/Loadable';
import { lazy } from 'react';

const MessagesInbox = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesInbox')));

const SendMessage = Loadable(lazy(() => import('modules/crm/pages/Message/SendMessage')));

const ViewMessage = Loadable(lazy(() => import('modules/crm/pages/Message/ViewMessage')));

// const MessagesTrashList = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesTrashList')));

// ==============================|| MAIN ROUTING ||============================== //

const CrmRoutes = [
  {
    key: 'messagesInbox',
    path: 'message/Inbox',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <MessagesInbox />
  },
  {
    key: 'viewMessage',
    path: 'message/view/:id?',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ViewMessage />
  },
  {
    key: 'sendMessage',
    path: 'message/:operation?/:id?/:toUser?',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <SendMessage />
  }
  // {
  //   key: 'messagesTrash',
  //   path: 'messagesTrash',
  //   permission: 'AUTH_GET.PERMISSION.LIST',
  //   element: <MessagesTrashList />
  // }
];

export default CrmRoutes;
