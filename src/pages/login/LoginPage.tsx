import LoginCompo from '@/components/login/LoginCompo';

const LoginPage = () => {
  return (
    <div className="bg-basic w-full h-screen">
      <div className=" inline-block w-3/4 my-20 mx-auto">
        <div className="bg-white rounded-lg ">
          <LoginCompo />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
