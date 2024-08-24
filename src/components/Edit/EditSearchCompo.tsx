import React, { useState } from 'react';
import Search from '@assets/svg/search.svg?react';
import { useEditStore } from '@/store/useEditStore';
import { NumberReducer } from '@/store/editReducer';
import { Button } from '../common/Button';

const EditSearchCompo = (props: NumberReducer) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchProp } = useEditStore((state) => state.states);
  const { setSearchData } = useEditStore((state) => state.actions);
  const [click, setClick] = useState(-1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const wayArray = ['보도용', '홍보용', '결과용'];
  // 이거 바꿀거
  const [way, setWay] = useState('보도용');
  //   useEffect(() => {
  //     getResultList(searchTerm);
  //   }, [searchTerm]);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex items-center gap-4">
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
      <div>
        <div
          className={`flex items-center py-4 px-3 min-w-[800px] w-[55%] bg-white rounded-ss-lg rounded-se-lg border-2 border-peach ${
            searchProp.length === 0 ? 'rounded-lg' : 'border-b-0'
          }`}
        >
          <input
            type="text"
            placeholder="검색"
            className="w-[96%]"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Search />
        </div>
        {searchProp.map((e, index) => {
          return (
            <div
              className={`border-border-1 border-[#CCCCCC] ${
                index === 0 ? '' : 'border-t-0'
              } py-4 px-3 text-start hover:bg-peach-light hover:text-white ${
                click === index ? 'bg-peach-semiThick text-white' : 'bg-white text-[#666666]'
              } ${index === searchProp.length - 1 ? 'rounded-es-lg rounded-ee-lg' : ''}`}
              onClick={() => setClick(index)}
            >
              {e}
            </div>
          );
        })}
      </div>
      <Button
        name="다음으로"
        className=" w-80 h-20 rounded-[30px] font-black text-4xl"
        onClick={() => {
          props.dispath({ type: 'PLUS' });
        }}
      ></Button>
    </div>
  );
};

export default EditSearchCompo;
