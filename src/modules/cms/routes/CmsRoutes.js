import Loadable from 'components/Loadable';
import { lazy } from 'react';

const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const TopicsList = Loadable(lazy(() => import('modules/cms/pages/Topic/TopicsList')));

const TagsList = Loadable(lazy(() => import('modules/cms/pages/Tags/TagsList')));

const ArticlesList = Loadable(lazy(() => import('modules/cms/pages/Article/ArticlesList')));

const ArticlesTrashList = Loadable(lazy(() => import('modules/cms/pages/Article/ArticlesTrashList')));

const AddOrEditArticle = Loadable(lazy(() => import('modules/cms/pages/Article/AddOrEditArticle')));

const PagesList = Loadable(lazy(() => import('modules/cms/pages/Page/PagesList')));

const AddOrEditPage = Loadable(lazy(() => import('modules/cms/pages/Page/AddOrEditPage')));

const MenusList = Loadable(lazy(() => import('modules/cms/pages/Menu/MenusList')));

// ==============================|| MAIN ROUTING ||============================== //

const CmsRoutes = [
  {
    key: 'tagsList',
    path: 'tagsList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <TagsList />
  },
  {
    key: 'topicsList',
    path: 'topicsList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <TopicsList />
  },
  {
    key: 'articleslist',
    path: 'ArticlesList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ArticlesList />
  },
  {
    key: 'articlesTrashlist',
    path: 'ArticlesTrashList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <ArticlesTrashList />
  },
  {
    key: 'addOrEditArticle',
    path: 'Article/:operation/:id',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <AddOrEditArticle />
  },
  {
    key: 'pageslist',
    path: 'PagesList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <PagesList />
  },
  {
    key: 'addOrEditPage',
    path: 'Page/:operation/:id',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <AddOrEditPage />
  },
  {
    key: 'MenusList',
    path: 'MenusList',
    permission: 'AUTH_GET.PERMISSION.LIST',
    element: <MenusList />
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
