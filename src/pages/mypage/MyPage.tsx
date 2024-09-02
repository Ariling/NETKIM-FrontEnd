import Loading from '@/components/common/Loading';
import MyPageView from '@/components/mypage/MypageView';
import { useEditStore } from '@/store/useEditStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const { open } = useEditStore((state) => state.states);
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
    }
  }, []);
  return (
    <>
      <div className="inline-block w-full min-h-[calc(100vh-56px)]">
        <div className="sticky top-0 z-10 w-full h-24 bg-peach-header font-black text-4xl flex items-end justify-center rounded-ss-[9px] rounded-se-[9px] px-6">
          마이페이지
        </div>
        <MyPageView />
      </div>
      {open.open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-[rgba(221,221,221,0.4)] z-10">
          <Loading />
        </div>
      )}
    </>
  );
};

export default MyPage;
