import { Button } from '@/components/common/Button';
import MainFrame from '@assets/img/MainFrame.webp';
import example from '@assets/img/NewsPreview.webp';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const router = useNavigate();
  return (
    <div className=" inline-block w-full min-h-[calc(100vh-56px)]">
      <div className="absolute top-0 left-0 w-full h-[630px] flex items-center justify-center">
        <img src={MainFrame} alt="메인이미지" className="absolute top-0 left-0 w-full h-full" />
        <div className="z-10 font-semibold text-3xl text-[48px] text-text-color flex flex-col gap-3">
          <span className="h-10">보도자료 작성부터</span>
          <span className="h-10">효과적인 메일 배포까지</span>
          <span className="h-10">모두 한 번에</span>
          <br />
          <span className="h-10">공연 홍보 파트너</span>
          <span className="h-10">공연이요</span>
        </div>
      </div>
      <div className="absolute top-1/4 left-[40%]">
        <img
          src={example}
          alt="예시이미지"
          className="w-full h-full object-contain opacity-[64%]"
        />
      </div>
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* 이건 중앙에 있게 할거지만 지금은 이 상태로 냅두기 */}
        <div className="w-full h-24">
          <Button
            name="작성하기"
            className=" w-80 h-20 rounded-[30px] font-black text-4xl z-50"
            onClick={() => {
              router('/edit');
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
