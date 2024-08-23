import EditPageCompo from '@/components/Edit/EditPageCompo';
import EditSearchCompo from '@/components/Edit/EditSearchCompo';
import EditSendCompo from '@/components/Edit/EditSendCompo';
import { reducer } from '@/store/editReducer';
import { useReducer } from 'react';

const EditOverView = () => {
  const [step, dispatch] = useReducer(reducer, 2);
  const getEditPage = (num: number) => {
    if (num === 1) return <EditSearchCompo />;
    if (num === 2) return <EditPageCompo />;
    if (num === 3) return <EditSendCompo />;
  };
  return <div className="inline-block w-full h-screen bg-basic">{getEditPage(step)}</div>;
};

export default EditOverView;
