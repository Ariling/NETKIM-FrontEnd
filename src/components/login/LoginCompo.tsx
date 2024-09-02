import LoginVector from '@assets/img/LoginVector.webp';
import Btn from '../common/Btn';
import { useNavigate } from 'react-router-dom';
import { useReducer, useState } from 'react';
import { inputReducer } from '@/store/editReducer';
import { regExpEmail } from '@/constants/regExp';
import { LoginApi } from '@/apis/loginapi';

const LoginCompo = () => {
  const welcome: String = 'Welcome!NETKIM';
  const navigate = useNavigate();
  const [email, emailMethod] = useReducer(inputReducer, '');
  const [pw, pwMethod] = useReducer(inputReducer, '');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailMethod({ type: 'CHANGE', payload: e.target.value });
    setIsValidEmail(regExpEmail.test(email));
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    pwMethod({ type: 'CHANGE', payload: e.target.value });
    setIsValidPw(pw.length >= 7);
  };
  const onLogin = async () => {
    const result = await LoginApi(email, pw);
    if (result?.status !== 200) {
      alert('이메일 혹은 비밀번호가 일치하지 않습니다');
    } else {
      localStorage.setItem('accessToken', result.data);
      navigate('/', { replace: true });
    }
  };
  return (
    <div className="flex items-center gap-[65px]">
      <div className="justify-between w-1/2">
        <img src={LoginVector} alt="로그인이미지" fetchPriority="high" className="w-full h-full" />
      </div>
      <div className="bg-white min-w-[558px] w-1/2 px-[67px] min-h-[782px] rounded-xl flex flex-col justify-center items-start">
        <pre className="text-[43px] font-black leading-[52.5px] whitespace-pre-line">{welcome}</pre>
        <div className="text-[25px] font-semibold leading-[52.5px] mb-[70px]">어쩌구 저쩌구</div>
        <div>
          <div className="flex flex-col items-start mb-4">
            <div className="text-lg font-semibold">이메일</div>
            <input
              className="text-left h-10 w-full"
              placeholder="ex) abc@www.com"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-lg font-semibold">비밀번호</div>
            <input
              className="text-left h-10 w-full"
              placeholder="8자리 이상 입력"
              type="password"
              value={pw}
              onChange={onChangePw}
            />
          </div>
          <div>
            <Btn
              name="로그인"
              onClick={() => {
                if (isValidEmail && pw.length >= 4) {
                  onLogin();
                } else {
                  alert('이메일 또는 비밀번호를 입력해주세요');
                }
              }}
              className="edit_btn bg-peach-semiThick mt-5"
            />
            <Btn
              name="회원가입"
              onClick={() => navigate('/signup')}
              className="edit_btn bg-peach mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCompo;
