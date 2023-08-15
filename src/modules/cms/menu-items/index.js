// assets
import { Article, Menu, Slideshow, Description, Topic } from '@mui/icons-material';
// icons
const icons = {
  Article,
  Description,
  Menu,
  Slideshow,
  Topic
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'contents',
  title: 'Contents',
  type: 'group',
  permission: 'AUTH_GET.PERMISSION.LIST',
  children: [
    {
      id: 'article',
      title: 'Articles',
      type: 'item',
      url: '/ArticlesList',
      icon: icons.Article,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'page',
      title: 'Pages',
      type: 'item',
      url: '/PagesList',
      icon: icons.Description,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'topic',
      title: 'Topics',
      type: 'item',
      url: '/TopicsList',
      icon: icons.Topic,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'menus',
      title: 'Menus',
      type: 'item',
      url: '/MenusList',
      icon: icons.Menu,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    },
    {
      id: 'slideshow',
      title: 'Slideshow',
      type: 'item',
      url: '/SlideshowList',
      icon: icons.Slideshow,
      breadcrumbs: false,
      permission: 'AUTH_GET.PERMISSION.LIST'
    }
  ]
};

export default pages;
