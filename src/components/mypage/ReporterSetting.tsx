import { useEffect, useReducer, useState } from 'react';
import { inputReducer } from '@/store/editReducer';
import Btn from '../common/Btn';
import ReporterList from './ReporterList';
import { regExpEmail } from '@/constants/regExp';
import { getReporterApi, postReporterApi } from '@/apis/reporterapi';
import { useReportStore } from '@/store/useReportStore';
import { useNavigate } from 'react-router-dom';
import { getAdminReporterApi, postAdminReporterApi } from '@/apis/adminapi';

const ReporterSetting = ({ type }: { type: string }) => {
  const router = useNavigate();
  const [data, dispatch] = useReducer(inputReducer, '');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [name, setName] = useReducer(inputReducer, '');
  const { setReporter } = useReportStore((state) => state.actions);
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE', payload: e.target.value });
    setIsValidEmail(regExpEmail.test(data));
  };
  const wayArray = [
    { name: '신문', data: 'NEWSPAPER' },
    { name: '티비', data: 'TV' },
    { name: '인플루언서', data: 'INFLUENCER' },
  ];
  // 이거 바꿀거
  const [way, setWay] = useState({
    name: '신문',
    data: 'NEWSPAPER',
  });
  const postReporter = async () => {
    const result =
      type === 'mypage'
        ? await postReporterApi(name, data, '', way.data)
        : await postAdminReporterApi(name, data, '', way.data);
    if (result?.status === 200) {
      alert('추가 성공');
      dispatch({ type: 'RESET' });
      setName({ type: 'RESET' });
    } else {
      alert('에러발생');
    }
  };
  useEffect(() => {
    const getData = async () => {
      const result = type === 'mypage' ? await getReporterApi() : await getAdminReporterApi();
      if (result?.status === 200) {
        setReporter(result.data);
      }
    };
    getData();
  }, []);
  return (
    <div className="mt-20 w-4/5 max-w-[800px] mx-auto overflow-y-scroll">
      <div className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-4">
          <div className="w-[240px]">
            <input
              placeholder="이메일을 입력해주세요"
              className="text-left h-10 w-full mb-5"
              onChange={onChangeData}
              value={data}
            />
            <input
              placeholder="이름을 입력해주세요"
              className="text-left h-10 w-full"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName({ type: 'CHANGE', payload: e.target.value })
              }
              value={name}
            />
          </div>
          <Btn
            name={'등록하기'}
            onClick={() => {
              if (isValidEmail && name.trim().length > 0) {
                postReporter();
                router(0);
              } else {
                alert('이메일 주소를 입력하거나 이름을 입력해주세요.');
              }
            }}
            className="bg-peach w-32 rounded-full py-1 text-white"
          />
        </div>
        <div className="flex items-center  gap-4">
          {wayArray.map((item) => {
            return (
              <>
                <input
                  type="radio"
                  name="way"
                  key={item.data}
                  value={item.name}
                  id={item.data}
                  className="hidden"
                  checked={way.name === item.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setWay({
                      name: e.target.value,
                      data: item.data,
                    });
                  }}
                />
                <label htmlFor={item.data} className="check_btn">
                  {item.name}
                </label>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <ReporterList type={way.data} page={type} />
      </div>
    </div>
  );
};

export default ReporterSetting;
