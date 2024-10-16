import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import ListPage from '@/pages/ListBySearchPage';
import MyPage from '@/pages/MyPage';
import Detail from '@/pages/DetailPage';
import ErrorPage from '@/pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'detail',
        element: <Detail />,
      },
    ],
  },
]);

export default router;
