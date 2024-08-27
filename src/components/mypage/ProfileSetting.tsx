import { ReactNode, useReducer, useState } from 'react';
import Card from '../common/Card';
import { inputReducer } from '@/store/editReducer';
import Btn from '../common/Btn';
import InputBox from '../signup/InputBox';
import FileUpload from '../signup/FileUpload';

export const renderBox = (children: ReactNode, name: string) => {
  return (
    <div className="flex items-center justify-center gap-10 mb-5">
      <Btn name={name} disabled className="bg-peach w-32 rounded-full py-1 text-white" />
      {children}
    </div>
  );
};

const ProfileSetting = () => {
  const [data, dispatch] = useReducer(inputReducer, '');
  const [fileText, setFileText] = useState<File>();
  const [on, setOn] = useState<boolean>(true);
  return (
    <div className="mt-20 w-4/5 max-w-[800px] mx-auto">
      <Card name="회원가입 폼" className="w-full h-[685px]">
        {
          <>
            <div className="flex flex-col items-center  justify-center h-[90%] w-full">
              <div className="flex justify-center items-center mb-10 gap-20">
                <div> 여기 이메일이랑 이메일 인증 하기</div>
                <button>이메일 인증 버튼</button>
              </div>
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
                    if (data === '') {
                      alert('사업자 이름을 기입해주세요');
                    } else if (!fileText) {
                      alert('파일을 첨부해주세요');
                    } else {
                      alert('등록완료!');
                      setOn(true);
                    }
                  }}
                  name="등록하기"
                  className="edit_btn bg-peach-thick mt-5"
                />
              )}
            </div>
          </>
        }
      </Card>
    </div>
  );
};

export default ProfileSetting;
