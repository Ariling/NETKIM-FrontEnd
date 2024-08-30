import { Button } from '@/components/common/Button';
import MainFrame from '@assets/img/MainFrame.webp';
import example from '@assets/img/NewsPreview.webp';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const router = useNavigate();
  return (
    <div className=" inline-block w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-[630px] flex items-center justify-center">
        <img src={MainFrame} alt="메인이미지" className="absolute top-0 left-0 w-full h-full" />
        <div className="z-10 font-semibold text-[64px] leading-[72px] tracking-tighter text-text-color ">
          보도자료 작성부터 효과적인 메일 배포까지 모두 한 번에
          <br />
          비인기 장르, 중소형 기획사의 홍보 파트너
          <br />
        </div>
      </div>
      <div className="absolute top-1/4 left-[40%]">
        <img
          src={example}
          alt="예시이미지"
          className="w-full h-full object-contain opacity-[64%]"
        />
      </div>
      <div className="relative w-full h-full">
        {/* 이건 중앙에 있게 할거지만 지금은 이 상태로 냅두기 */}
        <div className="sticky top-1/2 left-1/2 w-full h-24">
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
