import Loadable from 'components/Loadable';
import { lazy } from 'react';

const MessagesTrash = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesTrash')));

const MessagesInbox = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesInbox')));

const MessagesOutbox = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesOutbox')));

const MessagesDraft = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesDraft')));

const SendMessage = Loadable(lazy(() => import('modules/crm/pages/Message/SendMessage')));

const ViewInboxMessage = Loadable(lazy(() => import('modules/crm/pages/Message/ViewMessage/ViewInboxMessage')));

const ViewOutboxMessage = Loadable(lazy(() => import('modules/crm/pages/Message/ViewMessage/ViewOutboxMessage')));

// const MessagesTrashList = Loadable(lazy(() => import('modules/crm/pages/Message/MessagesTrashList')));

// ==============================|| MAIN ROUTING ||============================== //

const CrmRoutes = [
  {
    key: 'messagesInbox',
    path: 'messages/inbox',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <MessagesInbox />
  },{
    key: 'messagesOutbox',
    path: 'messages/outbox',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <MessagesOutbox />
  },{
    key: 'messagesDraft',
    path: 'messages/draft',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <MessagesDraft />
  },
  {
    key: 'messagesInboxTrash',
    path: 'messages/inbox/trash',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <MessagesTrash />
  },
  {
    key: 'viewInboxMessage',
    path: 'message/inbox/view/:id?',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ViewInboxMessage />
  },
  {
    key: 'viewOutboxMessage',
    path: 'message/outbox/view/:id?',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ViewOutboxMessage />
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
