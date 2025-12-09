import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/index'));
const TraditionalDevelopmentPage = lazy(() => import('./pages/traditional-development'));
const AISolutionsPage = lazy(() => import('./pages/ai-solutions'));
const BlogPage = lazy(() => import('./pages/blog'));
const ContactPage = lazy(() => import('./pages/contact'));
const BlogAdminPage = lazy(() => import('./pages/admin/blog'));
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
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/admin/blog',
    element: <BlogAdminPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
