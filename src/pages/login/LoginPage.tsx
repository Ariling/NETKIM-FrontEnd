import LoginCompo from '@/components/login/LoginCompo';

const LoginPage = () => {
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
