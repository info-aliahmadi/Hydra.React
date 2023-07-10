import Loadable from 'components/Loadable';
import { lazy } from 'react';

const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const TopicsList = Loadable(lazy(() => import('modules/cms/pages/Topic/TopicsList')));

const ContentsList = Loadable(lazy(() => import('modules/cms/pages/Article/ArticlesList')));

const AddOrEditContent = Loadable(lazy(() => import('modules/cms/pages/Article/AddOrEditArticle')));


// ==============================|| MAIN ROUTING ||============================== //

const CmsRoutes = [
  {
    key: 'topicsList',
    path: 'topicsList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <TopicsList />
  },{
    key: 'users-list',
    path: 'userslist',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ContentsList />
  },
  {
    key: 'addOrEditUser',
    path: 'User/:operation/:id',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <AddOrEditContent />
  },
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
