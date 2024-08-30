import React, { useEffect, useState } from 'react';
import Search from '@assets/svg/search.svg?react';
import { useEditStore } from '@/store/useEditStore';
import { NumberReducer } from '@/store/editReducer';
import { Button } from '../common/Button';
import { getSearchApi } from '@/apis/pressapi';
import debounce from 'lodash.debounce';

const EditSearchCompo = (props: NumberReducer) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setData] = useState([]);
  const { toolProp, searchProp } = useEditStore((state) => state.states);
  const { setToolData, setSearchData } = useEditStore((state) => state.actions);
  const [click, setClick] = useState(-1);
  const convertEnglishToLowerCase = (input: string): string => {
    return input.toLowerCase();
  };

  const choseongIncludes = (companyName: string, inputValue: string): boolean => {
    const getChoseong = (str: string): string => {
      const choseongs: string[] = [];
      for (let char of str) {
        const code = char.charCodeAt(0);
        if (code >= 0xac00 && code <= 0xd7a3) {
          const choseongIndex = Math.floor((code - 0xac00) / 588);
          choseongs.push(String.fromCharCode(0x1100 + choseongIndex));
        }
      }
      return choseongs.join('');
    };

    const companyChoseong = getChoseong(companyName);
    const inputChoseong = getChoseong(inputValue);

    return companyChoseong.startsWith(inputChoseong);
  };

  const hangulIncludes = (companyName: string, inputValue: string): boolean => {
    const hangulRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return hangulRegex.test(companyName) && companyName.includes(inputValue);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchData('type' as TSearch, value);
    if (!value) {
      setToolData([]);
      return;
    }
    filterCompanies(value);
  };

  const filterCompanies = (inputValue: string) => {
    const newCompanies = searchData.filter((company) => {
      const convertedCompanyName = convertEnglishToLowerCase(company);
      const convertedInput = convertEnglishToLowerCase(inputValue);

      return (
        choseongIncludes(convertedCompanyName, convertedInput) ||
        hangulIncludes(convertedCompanyName, convertedInput)
      );
    });
    setToolData(newCompanies);
  };

  // Debounce 적용
  const debouncedFilter = debounce(filterCompanies, 300);

  useEffect(() => {
    const getData = async () => {
      const result = await getSearchApi();
      if (result?.status === 200) {
        setData(result.data);
      }
    };
    getData();
    setSearchData('title' as TSearch, '');
  }, []);

  useEffect(() => {
    debouncedFilter(searchTerm); // debouncedFilter 사용
    return () => {
      debouncedFilter.cancel(); // 컴포넌트 언마운트 시 debounce 취소
    };
  }, [searchTerm]);
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
                key={index}
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
