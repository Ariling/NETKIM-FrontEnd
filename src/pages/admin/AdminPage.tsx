import { getAdminApi } from '@/apis/adminapi';
import { getMemberApi } from '@/apis/mypageapi';
import AdminPageView from '@/components/Admin/AdminPageView';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getRole = async () => {
      const result = await getAdminApi();
      if (result?.status === 200) {
        console.log(result?.data);
      } else if (result?.status === 400) {
        alert('어드민 외 접근할 수 없습니다.');
        navigate('/');
      } else {
        console.log(result);
      }
    };
    getRole();
  }, []);
  return (
    <>
      <div className=" inline-block w-full min-h-screen py-10">
        <div className="w-full h-24 bg-peach-header font-black text-4xl flex items-end justify-center rounded-ss-[9px] rounded-se-[9px] px-6">
          어드민 페이지
        </div>
        <div>
          <AdminPageView />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
