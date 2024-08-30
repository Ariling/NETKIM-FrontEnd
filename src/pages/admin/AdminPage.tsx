import AdminPageView from '@/components/Admin/AdminPageView';

const AdminPage = () => {
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
