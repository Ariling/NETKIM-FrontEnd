import { getAdminApi } from '@/apis/adminapi';
import { getMemberApi } from '@/apis/mypageapi';
import ListTable from '@/components/Admin/ListTable';
import Card from '@/components/common/Card';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getRole = async () => {
      const result = await getAdminApi();
      if (result?.status !== 200) {
        alert('어드민 외 접근할 수 없습니다.');
        navigate('/');
      } else {
        console.log(result?.data);
      }
    };
    getRole();
  }, []);
  return (
    <div className=" inline-block w-full">
      <Card name="회원가입 폼" className="mx-auto mt-20 w-[970px] h-[840px]">
        <div className="w-full h-24 bg-peach-header font-black text-4xl flex items-end justify-center rounded-ss-[9px] rounded-se-[9px] px-6">
          어드민 페이지
        </div>
        <div className="mt-20 w-4/5 max-w-[800px] mx-auto overflow-y-scroll">
          <ListTable />
        </div>
      </Card>
    </div>
  );
};

export default AdminPage;
