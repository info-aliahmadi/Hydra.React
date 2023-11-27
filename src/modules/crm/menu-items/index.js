// assets
import { Message, Email, Outbox, ForwardToInbox } from '@mui/icons-material';
// icons
const icons = {
  Message,
  Email,
  Outbox,
  ForwardToInbox
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //
const pages = {
  id: 'messaging',
  title: 'Messaging',
  type: 'group',
  permission: 'AUTH_GET.PERMISSION.LIST',
  children: [
    {
      id: 'messageInbox',
      title: 'Message Inbox',
      type: 'item',
      url: '/messages/inbox',
      icon: icons.Message,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'messageOutbox',
      title: 'Message Outbox',
      type: 'item',
      url: '/messages/outbox',
      icon: icons.Outbox,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'emailInbox',
      title: 'Email Inbox',
      type: 'item',
      url: '/emails/inbox',
      icon: icons.Email,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'emailOutbox',
      title: 'Email Outbox',
      type: 'item',
      url: '/emails/outbox',
      icon: icons.ForwardToInbox,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    }
  ]
};

export default pages;
