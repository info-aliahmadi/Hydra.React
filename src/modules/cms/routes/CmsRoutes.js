import Loadable from 'components/Loadable';
import { lazy } from 'react';

const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const TopicsList = Loadable(lazy(() => import('modules/cms/pages/Topic/TopicsList')));

const ArticlesList = Loadable(lazy(() => import('modules/cms/pages/Article/ArticlesList')));

const AddOrEditArticle = Loadable(lazy(() => import('modules/cms/pages/Article/AddOrEditArticle')));


// ==============================|| MAIN ROUTING ||============================== //

const CmsRoutes = [
  {
    key: 'topicsList',
    path: 'topicsList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <TopicsList />
  },{
    key: 'articleslist',
    path: 'ArticlesList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ArticlesList />
  },
  {
    key: 'addOrEditArticle',
    path: 'Article/:operation/:id',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <AddOrEditArticle />
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
