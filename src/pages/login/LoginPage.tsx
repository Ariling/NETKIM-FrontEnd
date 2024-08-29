import LoginCompo from '@/components/login/LoginCompo';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/', { replace: true });
    }
  }, []);
  return (
    <div className="bg-basic w-full min-h-screen flex items-center justify-center py-10">
      <div className="w-3/4 min-w-[1280px] max-w-3xl">
        <div className="bg-white rounded-lg">
          <LoginCompo />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
