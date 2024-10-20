import { createBrowserRouter, Outlet, RouterProvider as RP } from 'react-router-dom';

// import { ChapterProvider } from './chapter';

import { DialogProvider } from './dialog';

import {
  Abstract as IntroAbstract,
  Activities,
  Boss,
  Members,
  SelfSeminar,
  Seminar,
} from '@/articles/intro';
import {
  Archive,
  Other,
  Abstract as ResearchAbstract,
  Software,
  Tourism,
} from '@/articles/research';
import { PageLayout } from '@/components';
import { NotFound } from '@/pages';
import { paths } from '@/utils';

const RootLayout = () => {
  return (
    // TODO: ここにChapterProvider置くのは多分おかしい
    <DialogProvider>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </DialogProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: paths.top,
        element: <IntroAbstract />,
      },

      {
        path: paths.article('intro-abstract'),
        element: <IntroAbstract />,
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

      {
        path: paths.article('research-abstract'),
        element: <ResearchAbstract />,
      },
      {
        path: paths.article('research-tourism'),
        element: <Tourism />,
      },
      {
        path: paths.article('research-archive'),
        element: <Archive />,
      },
      {
        path: paths.article('research-software'),
        element: <Software />,
      },
      {
        path: paths.article('research-Other'),
        element: <Other />,
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
