import { useReducer, useState } from 'react';
import { inputReducer } from '@/store/editReducer';
import Btn from '../common/Btn';
import ReporterList from './ReporterList';

const ReporterSetting = () => {
  const [data, dispatch] = useReducer(inputReducer, '');
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE', payload: e.target.value });
  };
  const wayArray = ['기자', '언론', '인플루언서'];
  // 이거 바꿀거
  const [way, setWay] = useState('기자');
  return (
    <div className="mt-20 w-4/5 max-w-[800px] mx-auto overflow-y-scroll">
      <div className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-4">
          <input
            placeholder="이메일을 입력해주세요"
            className="font-Neo text-left h-10 w-[240px]"
            onChange={onChangeData}
            value={data}
          />
          <Btn
            name={'등록하기'}
            onClick={() => {
              alert('등록하기');
              dispatch({ type: 'RESET' });
            }}
            className="bg-peach w-32 rounded-full py-1 text-white"
          />
        </div>
        <div className="flex items-center  gap-4">
          {wayArray.map((e) => {
            return (
              <>
                <input
                  type="radio"
                  name="way"
                  key={e}
                  value={e}
                  id={e}
                  className="hidden"
                  checked={way === e}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setWay(e.target.value);
                  }}
                />
                <label htmlFor={e} className="check_btn">
                  {e}
                </label>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <ReporterList />
      </div>
    </div>
  );
};

export default ReporterSetting;
