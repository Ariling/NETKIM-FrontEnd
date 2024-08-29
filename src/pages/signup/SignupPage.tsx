import SignupForm from '@/components/signup/SignupForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/', { replace: true });
    }
  }, []);
  return (
    <div className="mt-20 w-screen h-screen flex justify-center">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
