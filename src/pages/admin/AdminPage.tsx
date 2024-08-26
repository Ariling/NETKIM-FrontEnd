import ListTable from '@/components/Admin/ListTable';
import Card from '@/components/common/Card';

const AdminPage = () => {
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
