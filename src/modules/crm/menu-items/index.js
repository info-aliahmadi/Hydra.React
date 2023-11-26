// assets
import { Message, Email } from '@mui/icons-material';
// icons
const icons = {
  Message,
  Email
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
      url: '/message/inbox',
      icon: icons.Message,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'emailInbox',
      title: 'Email Inbox',
      type: 'item',
      url: '/email/inbox',
      icon: icons.Email,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    }
  ]
};

export default pages;
