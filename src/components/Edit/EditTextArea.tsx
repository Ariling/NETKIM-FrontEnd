import { useEditStore } from '@/store/useEditStore';
import React, { useState } from 'react';
import Pencil from '@assets/svg/write.svg?react';
import Check from '@assets/svg/Checkbox.svg?react';
import UnCheck from '@assets/svg/UnCheckbox.svg?react';

type Prop = {
  data: string;
  index: number;
  content: string;
  check: boolean[];
  setCheck: React.Dispatch<React.SetStateAction<boolean[]>>;
};

const EditTextArea = ({ data, index, content, check, setCheck }: Prop) => {
  const { editProp } = useEditStore((state) => state.states);
  const { setData } = useEditStore((state) => state.actions);
  const [edit, setEdit] = useState(true);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(data as TEdit, e.target.value);
  };
  const changeCheck = (index: number, check: boolean) => {
    setCheck((prevCheck) => {
      const newCheck = [...prevCheck];
      newCheck[index] = check ? false : true;
      return newCheck;
    });
  };
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div>{content}</div>
        <div className="flex items-center gap-2">
          {edit ? (
            <Pencil onClick={() => setEdit(!edit)} />
          ) : (
            <button onClick={() => setEdit(!edit)}>변경</button>
          )}
          {check[index] ? (
            <Check onClick={() => changeCheck(index, true)} />
          ) : (
            <UnCheck onClick={() => changeCheck(index, false)} />
          )}
        </div>
      </div>
      <textarea
        className="w-full h-12 bg-basic rounded-lg resize-none p-2"
        disabled={edit}
        value={editProp[data as TEdit]}
        onChange={onChange}
      />
    </>
  );
};

export default EditTextArea;
