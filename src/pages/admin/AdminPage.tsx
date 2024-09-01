import AdminPageView from '@/components/Admin/AdminPageView';

const AdminPage = () => {
  return (
    <>
      <div className="inline-block w-full min-h-[calc(100vh-56px)]">
        <div className="sticky top-0 z-10 w-full h-24 bg-peach-header font-black text-4xl flex items-end justify-center rounded-ss-[9px] rounded-se-[9px] px-6">
          어드민페이지
        </div>
        <AdminPageView />
        ㅌㅈ
      </div>
    </>
  );
};

export default AdminPage;
