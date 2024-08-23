import { useEditStore } from '@/store/useEditStore';
import React from 'react';

const EditTextArea = ({ data }: { data: string }) => {
  const { editProp } = useEditStore((state) => state.states);
  const { setData } = useEditStore((state) => state.actions);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(data as TEdit, e.target.value);
  };
  return (
    <textarea
      className="w-full h-12 bg-basic rounded-lg resize-none p-2"
      value={editProp[data as TEdit]}
      onChange={onChange}
    />
  );
};

export default EditTextArea;
