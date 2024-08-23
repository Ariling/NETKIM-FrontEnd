import Card from '../common/Card';
import EditTextArea from './EditTextArea';
import Btn from '../common/Btn';
import { useState } from 'react';

const EditPageCompo = () => {
  const editArray = [
    { state: 'title', content: '제목*' },
    { state: 'casting', content: '등장인물*' },
    { state: 'content', content: '줄거리*' },
    { state: 'day', content: '날짜*' },
    { state: 'location', content: '장소*' },
    { state: 'interview', content: '인터뷰' },
  ];
  const [check, setCheck] = useState(Array.from(Array(editArray.length), (_) => false));
  return (
    <div className="mt-20 w-full h-full flex justify-center gap-12">
      <Card name="Edit툴" className="min-w-[510px] max-h-[807px]">
        <div className="flex items-center h-[8%] w-full px-6 py-5 font-bold text-3xl">Edit</div>
        <div className="px-[31px] w-full">
          {editArray.map((e, index) => {
            return (
              <div className="flex flex-col gap-3 justify-center items-start mb-2.5" key={e.state}>
                <EditTextArea
                  data={e.state}
                  index={index}
                  content={e.content}
                  check={check}
                  setCheck={setCheck}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col mt-9 gap-2.5 items-center">
          <Btn name="프리뷰 생성하기" className="edit_btn bg-peach" />
          <Btn name="보도자료 생성하기" className="edit_btn bg-peach-thick" />
        </div>
      </Card>
      <Card name="미리보기" className="w-[672px] max-h-[807px]">
        미리보기
      </Card>
    </div>
  );
};

export default EditPageCompo;
