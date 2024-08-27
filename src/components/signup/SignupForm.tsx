import { useReducer, useState } from 'react';
import Card from '../common/Card';
import { inputReducer } from '@/store/editReducer';
import Btn from '../common/Btn';
import { useNavigate } from 'react-router-dom';
import { regExpEmail } from '@/constants/regExp';

const SignupForm = () => {
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
  return (
    <div>
      <Card name="회원가입 폼" className="w-[970px] h-[685px]">
        {
          <>
            <div className="flex items-center h-[15%] w-full bg-peach-light rounded-ss-[9px] rounded-se-[9px] px-6 font-bold text-3xl">
              회원가입
            </div>
            <div className="w-4/5 flex flex-col justify-center items-center mt-10">
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
            </div>
            <div className="flex flex-col items-center  justify-center h-[75%] w-full">
              <Btn
                name="회원가입"
                onClick={() => {
                  if (isValidEmail && isValidPw) {
                    alert('회원가입 API');
                    pwMethod({ type: 'RESET' });
                    emailMethod({ type: 'RESET' });
                    navigate('/login');
                  } else {
                    alert('이메일 형식을 지키거나 비밀번호 8자리를 입력하세요');
                  }
                }}
                className="edit_btn bg-peach-semiThick mt-5"
              />
            </div>
          </>
        }
      </Card>
    </div>
  );
};

export default SignupForm;
