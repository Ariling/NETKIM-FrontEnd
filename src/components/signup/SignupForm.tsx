import { useReducer, useState } from 'react';
import Card from '../common/Card';
import { inputReducer } from '@/store/editReducer';
import Btn from '../common/Btn';
import { useNavigate } from 'react-router-dom';
import { regExpEmail } from '@/constants/regExp';
import { SignUpUserInfoApi } from '@/apis/loginapi';

const SignupForm = () => {
  const navigate = useNavigate();
  const [email, emailMethod] = useReducer(inputReducer, '');
  const [pw, pwMethod] = useReducer(inputReducer, '');
  const [phone, PhoneMethod] = useReducer(inputReducer, '');
  const [username, usernameDispatch] = useReducer(inputReducer, '');
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
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    PhoneMethod({ type: 'CHANGE', payload: value });
  };
  const onSignup = async () => {
    const result = await SignUpUserInfoApi(username, phone, pw, email);
    if (result?.status !== 200) {
      alert('회원가입 오류 다시 시도해주세요');
    } else {
      alert('회원가입 성공!');
      navigate('/login');
    }
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
              <div className="flex flex-col items-start mb-4">
                <div className="text-lg font-semibold">비밀번호</div>
                <input
                  className="text-left h-10 w-full"
                  placeholder="8자리 이상 입력"
                  type="password"
                  value={pw}
                  onChange={onChangePw}
                />
              </div>
              <div className="flex flex-col items-start mb-4">
                <div className="text-lg font-semibold">닉네임</div>
                <input
                  className="text-left h-10 w-full"
                  placeholder="최소 한 글자 이상"
                  value={username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value.trim();
                    usernameDispatch({ type: 'CHANGE', payload: value });
                  }}
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="text-lg font-semibold">핸드폰</div>
                <input
                  type="text"
                  value={phone}
                  onChange={onChangePhone}
                  maxLength={11}
                  placeholder="-를 제외하고 입력해주세요"
                  className="text-left h-10 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center  justify-center h-[75%] w-full">
              <Btn
                name="회원가입"
                onClick={() => {
                  if (isValidEmail && isValidPw && phone.length === 11 && username !== '') {
                    onSignup();
                  } else {
                    alert('회원가입 형식을 전부 형식에 맞게 입력해주세요');
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
