import { createBrowserRouter, Outlet, RouterProvider as RP } from 'react-router-dom';

// import { ChapterProvider } from './chapter';

import { Abstract, Activities, Boss, Members, SelfSeminar, Seminar } from '@/articles/intro';
import { PageLayout } from '@/components';
import { NotFound } from '@/pages';
import { paths } from '@/utils';

const RootLayout = () => {
  return (
    // TODO: ここにChapterProvider置くのは多分おかしい
    // <ChapterProvider>
    <PageLayout>
      <Outlet />
    </PageLayout>
    // </ChapterProvider>
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
      {
        path: paths.article('intro-boss'),
        element: <Boss />,
      },
      {
        path: paths.article('intro-members'),
        element: <Members />,
      },
      {
        path: paths.article('intro-seminar'),
        element: <Seminar />,
      },
      {
        path: paths.article('intro-self_seminar'),
        element: <SelfSeminar />,
      },
      {
        path: paths.article('intro-activities'),
        element: <Activities />,
      },
    ],
  },
  {
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <RP router={router} />;
};
