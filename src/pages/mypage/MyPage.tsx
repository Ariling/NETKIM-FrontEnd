import MyPageView from '@/components/mypage/MypageView';

const MyPage = () => {
  return (
    <div className=" inline-block w-full">
      <div className="w-full h-24 bg-peach-header font-black text-4xl flex items-end justify-center rounded-ss-[9px] rounded-se-[9px] px-6">
        마이페이지
      </div>
      <div>
        <MyPageView />
      </div>
    </div>
  );
};

export default MyPage;
