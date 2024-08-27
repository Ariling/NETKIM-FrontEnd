import React, { useEffect, useState } from 'react';
import Search from '@assets/svg/search.svg?react';
import { useEditStore } from '@/store/useEditStore';
import { NumberReducer } from '@/store/editReducer';
import { Button } from '../common/Button';

const EditSearchCompo = (props: NumberReducer) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toolProp, searchProp } = useEditStore((state) => state.states);
  const { setToolData, setSearchData } = useEditStore((state) => state.actions);
  const [click, setClick] = useState(-1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearchData('type' as TSearch, e.target.value);
  };
  useEffect(() => {
    setSearchData('title' as TSearch, '');
  }, []);
  //   useEffect(() => {
  //     getResultList(searchTerm);
  //   }, [searchTerm]);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="flex justify-between items-center min-w-[800px]">
        {/* 여기에 state관리 넣어서 관리할 것 */}
        <div className="text-peach-text text-2xl">
          <span className="font-bold">공연 제목</span> :{' '}
          {searchProp.title === '' ? (
            <span className="text-black">공연을 검색해주세요</span>
          ) : (
            <span className="text-black">{searchProp.title}</span>
          )}
        </div>
      </div>
      <div>
        <div
          className={`flex items-center py-4 px-3 min-w-[800px] w-[55%] bg-white rounded-ss-lg rounded-se-lg border-2 border-peach ${
            toolProp.length === 0 ? 'rounded-lg' : 'border-b-0'
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
        <div className="max-h-[285px] overflow-y-scroll rounded-es-lg rounded-ee-lg border-b-border-1 border-[#CCCCCC]">
          {toolProp.map((e, index) => {
            return (
              <div
                key={e}
                className={`border-border-1 border-[#CCCCCC] ${
                  index === 0 ? '' : 'border-t-0'
                } py-4 px-3 text-start hover:bg-peach-light hover:text-white ${
                  click === index ? 'bg-peach-semiThick text-white' : 'bg-white text-[#666666]'
                } ${index === toolProp.length - 1 ? 'border-b-0' : ''}`}
                onClick={() => {
                  setClick(index);
                  setSearchData('title' as TSearch, e);
                }}
              >
                {e}
              </div>
            );
          })}
        </div>
      </div>
      <Button
        name="다음으로"
        className=" w-80 h-20 rounded-[30px] font-black text-4xl"
        onClick={() => {
          if (searchProp.title === '') {
            alert('제목을 검색해주세요');
          } else {
            props.dispath({ type: 'PLUS' });
          }
        }}
      ></Button>
    </div>
  );
};

export default EditSearchCompo;
