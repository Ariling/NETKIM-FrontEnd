import { inputReducer } from '@/store/editReducer';
import { useReducer } from 'react';

const InputBox = () => {
  const [data, dispatch] = useReducer(inputReducer, '');
  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE', payload: e.target.value });
  };
  return (
    <input
      placeholder="닉네임을 입력해주세요"
      className=" font-Neo text-center"
      maxLength={15}
      onChange={onChangeData}
      value={data}
    />
  );
};

export default InputBox;
