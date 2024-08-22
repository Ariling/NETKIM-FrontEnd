import { Button } from '@/components/common/Button';
import MainFrame from '@assets/img/MainFrame.webp';
import example from '@assets/img/EditExample.png';
const MainPage = () => {
  return (
    <div className=" inline-block w-full h-screen">
      <div className="relative w-full h-[630px] flex items-center justify-center">
        <img src={MainFrame} alt="메인이미지" className="absolute top-0 left-0 w-full h-full" />
        <div className="z-10 font-semibold text-[64px] leading-[72px] tracking-tighter text-text-color ">
          인트로 적는 곳 어쩌구 저쩌구 어쩌구
          <br />
          어쩌구 저쩌구 얄라리 얄라숑
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute -top-1/3 left-1/2">
          <img
            src={example}
            alt="예시이미지"
            className="w-full h-full object-contain opacity-[64%]"
          />
        </div>
        {/* 이건 중앙에 있게 할거지만 지금은 이 상태로 냅두기 */}
        <div className="w-full h-24 z-[30]">
          <Button
            name="작성하기"
            className=" w-80 h-20 rounded-[30px] font-black text-4xl"
            onClick={() => {
              alert('아니 뭐임?');
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
