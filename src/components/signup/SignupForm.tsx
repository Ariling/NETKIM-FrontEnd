import { useState } from 'react';
import Card from '../common/Card';
import FileUpload from './FileUpload';
import InputBox from './InputBox';

const SignupForm = () => {
  const [fileText, setFileText] = useState<File>();
  return (
    <div>
      <Card name="회원가입 폼" className="w-[970px] h-[685px]">
        {
          <>
            <div className="flex items-center h-[15%] w-full bg-peach-light rounded-ss-[9px] rounded-se-[9px] px-6 font-bold text-3xl">
              사업자등록
            </div>
            <InputBox />
            <FileUpload fileText={fileText} setFileText={setFileText} />
            <button>등록하기</button>
          </>
        }
      </Card>
    </div>
  );
};

export default SignupForm;
