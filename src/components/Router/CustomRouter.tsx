import App from '@/App';
import AdminPage from '@/pages/admin/AdminPage';
import EditOverView from '@/pages/edit/EditOverView';
import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
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
        path: 'admin',
        element: <AdminPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);
export default CustomRouter;
