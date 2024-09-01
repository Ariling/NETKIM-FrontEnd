import { ReactNode, useEffect, useReducer, useState } from 'react';
import Card from '../common/Card';
import { inputReducer } from '@/store/editReducer';
import Btn from '../common/Btn';
import InputBox from '../signup/InputBox';
import FileUpload from '../signup/FileUpload';
import { checkMemberApi, MypageRoleChangeApi, VerifyEmailApi } from '@/apis/mypageapi';
import { useNavigate } from 'react-router-dom';
import ImgDiv from '../common/ImgDiv';

export const renderBox = (children: ReactNode, name: string) => {
  return (
    <div className="flex items-center justify-center gap-10 mb-5">
      <Btn name={name} disabled className="bg-peach w-32 rounded-full py-1 text-white" />
      {children}
    </div>
  );
};

const ProfileSetting = () => {
  const router = useNavigate();
  const [data, dispatch] = useReducer(inputReducer, '');
  const [fileText, setFileText] = useState<File>();
  const [on, setOn] = useState<boolean>(true);
  const [isRegister, setIsRegister] = useState({
    register: false,
    complete: false,
  });
  const verifyEmail = async () => {
    const result = await VerifyEmailApi();
    if (result?.status === 200) {
      alert('메일을 발송했습니다. 30분 이내에 인증해주세요');
    } else {
      alert('이미 인증한 회원입니다.');
    }
  };
  const registerRole = async () => {
    if (data === '') {
      alert('사업자 이름을 기입해주세요');
    } else if (!fileText) {
      alert('파일을 첨부해주세요');
    } else {
      const result = await MypageRoleChangeApi(fileText, data);
      if (result?.status === 200) {
        alert('등록이 되었습니다. 관리자한테 승낙을 받기 전까지 기다려주십시오');
        router(0);
      } else {
        alert('에러가 발생했습니다.');
      }
      setOn(true);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const result = await checkMemberApi();
      if (result?.status === 200) {
        setIsRegister({
          register: false,
          complete: false,
        });
      } else if (result?.status === 400) {
        setIsRegister({
          register: true,
          complete: true,
        });
      } else if (result?.status === 409) {
        setIsRegister({
          register: true,
          complete: false,
        });
      }
    };
    getData();
  }, []);
  return (
    <div className="mt-20 w-4/5 max-w-[800px] mx-auto">
      <Card name="회원가입 폼" className="w-full h-[685px]">
        {
          <>
            <div className="flex flex-col items-center  justify-center h-[90%] w-full">
              <div className="w-[600px] flex justify-end items-center mb-10 gap-20">
                <Btn
                  onClick={() => verifyEmail()}
                  name="이메일 인증하기"
                  className="bg-peach-light w-32 rounded-full py-1 text-white"
                />
              </div>
              {isRegister.register === false ? (
                <>
                  {renderBox(
                    <InputBox state={data} dispatch={dispatch} on={on} setOn={setOn} />,
                    '상호명'
                  )}
                  {renderBox(
                    <FileUpload fileText={fileText} setFileText={setFileText} on={on} />,
                    '사업자등록증'
                  )}
                  {on ? (
                    <Btn
                      onClick={() => {
                        setOn(false);
                      }}
                      name="변경하기"
                      className="edit_btn bg-peach-semiThick mt-5"
                    />
                  ) : (
                    <Btn
                      onClick={() => {
                        registerRole();
                      }}
                      name="등록하기"
                      className="edit_btn bg-peach-thick mt-5"
                    />
                  )}
                </>
              ) : isRegister.complete === false ? (
                <>
                  <div className="flex justify-center items-center flex-col h-[80%] gap-6">
                    <ImgDiv type="mypage" text="사업자 등록이 진행중입니다." />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center flex-col h-[80%] gap-6">
                    <ImgDiv type="mypage" text="등록된 회원입니다." />
                  </div>
                </>
              )}
            </div>
          </>
        }
      </Card>
    </div>
  );
};

export default ProfileSetting;
