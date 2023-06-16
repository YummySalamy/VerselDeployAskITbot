import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const Configuration = Loadable(lazy(() => import('../views/sample-page/ConfigurationPage')))
const ManageSources = Loadable(lazy(() => import('../views/icons/ManageSourcesPage')))
const EmbeddingsPage = Loadable(lazy(() => import('../views/utilities/Embeddings')))
const ChatBot = Loadable(lazy(() => import('../views/utilities/Chatbot')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/sample-page', exact: true, element: <Configuration /> },
      { path: '/icons', exact: true, element: <ManageSources /> },
      { path: '/ui/typography', exact: true, element: <EmbeddingsPage /> },
      { path: '/ui/shadow', exact: true, element: <ChatBot /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
