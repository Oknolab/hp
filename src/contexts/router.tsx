import { createBrowserRouter, Outlet, RouterProvider as RP } from 'react-router-dom';

import { Abstract } from '@/articles/intro';
import { PageLayout } from '@/components';
import { paths } from '@/utils';

const RootLayout = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: paths.top,
        element: <Abstract />,
      },
      {
        path: paths.article('intro-abstract'),
        element: <Abstract />,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <RP router={router} />;
};
