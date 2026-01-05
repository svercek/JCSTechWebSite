import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/index'));
const TraditionalDevelopmentPage = lazy(() => import('./pages/traditional-development'));
const AISolutionsPage = lazy(() => import('./pages/ai-solutions'));
const ThoughtsPage = lazy(() => import('./pages/blog'));
const ContactPage = lazy(() => import('./pages/contact'));
const ThoughtsAdminPage = lazy(() => import('./pages/admin/blog'));
const AdminLoginPage = lazy(() => import('./pages/admin/login'));
const NotFoundPage = lazy(() => import('./pages/_404'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/traditional-development',
    element: <TraditionalDevelopmentPage />,
  },
  {
    path: '/ai-solutions',
    element: <AISolutionsPage />,
  },
  {
    path: '/thoughts',
    element: <ThoughtsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/admin/login',
    element: <AdminLoginPage />,
  },
  {
    path: '/admin/thoughts',
    element: <ThoughtsAdminPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
