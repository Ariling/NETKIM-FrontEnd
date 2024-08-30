import App from '@/App';
import AdminPage from '@/pages/admin/AdminPage';
import EditOverView from '@/pages/edit/EditOverView';
import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import MyPage from '@/pages/mypage/MyPage';
import NotFound from '@/pages/notFound/NotFound';
import SignupPage from '@/pages/signup/SignupPage';
import { createBrowserRouter } from 'react-router-dom';

const CustomRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'edit',
        element: <EditOverView />,
      },
      {
        path: 'gongyeaonioAdminPageLimitedForOther',
        element: <AdminPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);
export default CustomRouter;
