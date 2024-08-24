import ListTable from '@/components/Admin/ListTable';

const AdminPage = () => {
  return (
    <div className=" inline-block w-full">
      <div className="w-full h-24 bg-peach-header font-black text-4xl flex items-end justify-center">
        유저 관리
      </div>
      <div className="mt-20 w-3/5 max-w-[800px] mx-auto">
        <ListTable />
      </div>
    </div>
  );
};

export default AdminPage;
