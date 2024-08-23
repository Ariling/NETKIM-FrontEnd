import LoginVector from '@assets/img/LoginVector.webp';
import GoogleBtn from '@assets/img/googleStart.png';
import KakaoBtn from '@assets/img/kakaoStart.png';

const LoginCompo = () => {
  const welcome: String = 'Welcome!NETKIM';
  return (
    <div className="flex items-center gap-[65px]">
      <div className="justify-between w-1/2">
        <img src={LoginVector} alt="로그인이미지" fetchPriority="high" className="w-full h-full" />
      </div>
      <div className="bg-white min-w-[558px] w-1/2 px-[67px] min-h-[782px] rounded-xl flex flex-col justify-center items-start">
        <pre className="text-[43px] font-black leading-[52.5px] whitespace-pre-line">{welcome}</pre>
        <div className="text-[25px] font-semibold leading-[52.5px] mb-[70px]">어쩌구 저쩌구</div>
        <div>
          <img
            src={KakaoBtn}
            alt="카카오로 로그인하기"
            style={{
              marginBottom: '41px',
              cursor: 'pointer',
            }}
            fetchPriority="high"
            onClick={() => alert('카카오')}
          />
          <img
            src={GoogleBtn}
            alt="구글로 로그인하기"
            style={{
              marginBottom: '58px',
              cursor: 'pointer',
            }}
            fetchPriority="high"
            onClick={() => alert('구글')}
          />
          <div>
            소셜 계정을 통해 바로 이용이 가능하며
            <br />첫 로그인시 이용약관 및 개인정보처리방침 동의로 간주됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCompo;
