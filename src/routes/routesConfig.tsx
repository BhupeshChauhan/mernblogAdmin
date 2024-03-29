// routes.ts
import { LinearProgress } from '@mui/material';
import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = React.lazy(() => import('../pages/NotFound'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Layout = React.lazy(() => import('../layout'));
const UserAuth = React.lazy(() => import('../pages/auth'));
const Posts = React.lazy(() => import('../modules/cms/pages/posts/List'));
const PostAdd = React.lazy(() => import('../modules/cms/pages/posts/Add'));
const PostEdit = React.lazy(() => import('../modules/cms/pages/posts/Edit'));
const Draft = React.lazy(() => import('../modules/cms/pages/drafts/List'));
const DraftAdd = React.lazy(() => import('../modules/cms/pages/drafts/Add'));
const DraftEdit = React.lazy(() => import('../modules/cms/pages/drafts/Edit'));
const Categories = React.lazy(() => import('../modules/cms/pages/categories/List'));
const CategoriesAdd = React.lazy(() => import('../modules/cms/pages/categories/Add'));
const CategoriesEdit = React.lazy(() => import('../modules/cms/pages/categories/Edit'));
const Tags = React.lazy(() => import('../modules/cms/pages/tags/List'));
const TagsAdd = React.lazy(() => import('../modules/cms/pages/tags/Add'));
const TagsEdit = React.lazy(() => import('../modules/cms/pages/tags/Edit'));
const ImagesList = React.lazy(() => import('../modules/cms/pages/images/List'));
const AddImages = React.lazy(() => import('../modules/cms/pages/images/Add'));
const UsersList = React.lazy(() => import('../modules/ums/pages/users/List'));
const UsersAdd = React.lazy(() => import('../modules/ums/pages/users/Add'));
const UsersEdit = React.lazy(() => import('../modules/ums/pages/users/Edit'));
const ClientUser = React.lazy(() => import('../modules/ums/pages/clientUser/List'));
const Roles = React.lazy(() => import('../modules/ums/pages/roles/List'));
const RolesAdd = React.lazy(() => import('../modules/ums/pages/roles/Add'));
const RolesEdit = React.lazy(() => import('../modules/ums/pages/roles/Edit'));

interface RouteConfig {
  path?: any;
  element: any;
  children?: any;
  errorElement?: any;
}

const routes: RouteConfig[] = [
  {
    // parent route component
    element: (
      <Suspense fallback={<LinearProgress />}>
        <Layout type='mini' />
      </Suspense>
    ),
    errorElement: <Navigate to='/404' />,
    // child route components
    children: [{ path: '/', element: <UserAuth type='sign-in' /> }],
  },
  {
    // parent route component
    element: (
      <Suspense fallback={<LinearProgress />}>
        <Layout type='main' />
      </Suspense>
    ),
    errorElement: <Navigate to='/404' />,
    // child route components
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/posts/list', element: <Posts /> },
      { path: '/posts/add', element: <PostAdd /> },
      { path: '/posts/edit/:id', element: <PostEdit /> },
      { path: '/draft/list', element: <Draft /> },
      { path: '/draft/add', element: <DraftAdd /> },
      { path: '/draft/edit/:id', element: <DraftEdit /> },
      { path: '/categories/list', element: <Categories /> },
      { path: '/categories/add', element: <CategoriesAdd /> },
      { path: '/categories/edit/:id', element: <CategoriesEdit /> },
      { path: '/tags/list', element: <Tags /> },
      { path: '/tags/add', element: <TagsAdd /> },
      { path: '/tags/edit/:id', element: <TagsEdit /> },
      { path: '/images/list', element: <ImagesList /> },
      { path: '/images/add', element: <AddImages /> },
      { path: '/users/list', element: <UsersList /> },
      { path: '/users/add', element: <UsersAdd /> },
      { path: '/users/edit/:id', element: <UsersEdit /> },
      { path: '/clientUser/list', element: <ClientUser /> },
      { path: '/roles/list', element: <Roles /> },
      { path: '/roles/add', element: <RolesAdd /> },
      { path: '/roles/edit/:id', element: <RolesEdit /> },
    ],
  },
  {
    path: '/404',
    element: (
      <Suspense fallback={<LinearProgress color='inherit' />}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
