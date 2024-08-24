import Card from '../common/Card';
import EditTextArea from './EditTextArea';
import Btn from '../common/Btn';
import { useState } from 'react';
import { NumberReducer } from '@/store/editReducer';
import preview from '@assets/img/Preview.webp';

const EditPageCompo = (props: NumberReducer) => {
  const editArray = [
    { state: 'title', content: '제목*' },
    { state: 'casting', content: '등장인물*' },
    { state: 'content', content: '줄거리*' },
    { state: 'day', content: '날짜*' },
    { state: 'location', content: '장소*' },
    { state: 'interview', content: '인터뷰' },
  ];
  const [check, setCheck] = useState(Array.from(Array(editArray.length), (_) => false));
  const [show, setShow] = useState(false);
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
          <Btn
            onClick={() => {
              setShow(true);
            }}
            name="프리뷰 생성하기"
            className="edit_btn bg-peach"
          />
          <Btn
            onClick={() => {
              props.dispath({ type: 'PLUS' });
            }}
            name="보도자료 생성하기"
            className="edit_btn bg-peach-thick"
          />
        </div>
      </Card>
      <Card name="미리보기" className="relative w-[672px] max-h-[807px]">
        {show ? (
          <div>여기에 내용이 나올 것!</div>
        ) : (
          <div className="flex justify-center items-center flex-col h-full gap-6">
            <img src={preview} alt="미리보기 이미지" width={148} height={128} />
            <div className="text-gray-500 font-semibold text-lg">
              프리뷰 생성하기를 눌러 미리 확인해보세요
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default EditPageCompo;
