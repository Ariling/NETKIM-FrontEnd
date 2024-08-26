import { Children, ReactNode, useReducer, useState } from 'react';
import Card from '../common/Card';
import FileUpload from './FileUpload';
import InputBox from './InputBox';
import { inputReducer } from '@/store/editReducer';
import Btn from '../common/Btn';

const SignupForm = () => {
  const [data, dispatch] = useReducer(inputReducer, '');
  const [fileText, setFileText] = useState<File>();
  const renderBox = (children: ReactNode, name: string) => {
    return (
      <div className="flex items-center justify-center gap-10 mb-5">
        <Btn name={name} disabled className="bg-peach w-32 rounded-full py-1 text-white" />
        {children}
      </div>
    );
  };
  return (
    <div>
      <Card name="회원가입 폼" className="w-[970px] h-[685px]">
        {
          <>
            <div className="flex items-center h-[15%] w-full bg-peach-light rounded-ss-[9px] rounded-se-[9px] px-6 font-bold text-3xl">
              사업자등록
            </div>
            <div className="flex flex-col items-center  justify-center h-[75%] w-full">
              {renderBox(<InputBox state={data} dispatch={dispatch} />, '상호명')}
              {renderBox(
                <FileUpload fileText={fileText} setFileText={setFileText} />,
                '사업자등록증'
              )}
              <Btn
                onClick={() => {
                  if (data === '') {
                    alert('사업자 이름을 기입해주세요');
                  } else if (!fileText) {
                    alert('파일을 첨부해주세요');
                  } else {
                    alert('회원가입 완료!');
                  }
                }}
                name="등록하기"
                className="edit_btn bg-peach-thick mt-5"
              />
            </div>
          </>
        }
      </Card>
    </div>
  );
};

export default SignupForm;
