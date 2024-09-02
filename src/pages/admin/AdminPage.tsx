import AdminPageView from '@/components/Admin/AdminPageView';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      let info = JSON.parse(atob(localStorage.getItem('accessToken')!.split(' ')[1].split('.')[1]));
      if (info['USER_ROLE'] !== 'ADMIN') {
        alert('어드민 이외에는 접근할 수 없습니다');
        navigate('/');
      }
    } else {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <div className="inline-block w-full min-h-[calc(100vh-56px)]">
        <div className="sticky top-0 z-10 w-full h-24 bg-peach-header font-black text-4xl flex items-end justify-center rounded-ss-[9px] rounded-se-[9px] px-6">
          어드민페이지
        </div>
        <AdminPageView />
      </div>
    </>
  );
};

export default AdminPage;
