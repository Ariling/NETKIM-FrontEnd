import Card from '../common/Card';
import EditTextArea from './EditTextArea';
import Pencil from '@assets/svg/write.svg?react';
import Check from '@assets/svg/Checkbox.svg?react';
import UnCheck from '@assets/svg/UnCheckbox.svg?react';
import Btn from '../common/Btn';

const EditPageCompo = () => {
  const editArray = [
    { state: 'title', content: '제목*' },
    { state: 'casting', content: '등장인물*' },
    { state: 'content', content: '줄거리*' },
    { state: 'day', content: '날짜*' },
    { state: 'location', content: '장소*' },
    { state: 'interview', content: '인터뷰' },
  ];
  return (
    <div className="mt-20 w-full h-full flex justify-center gap-12">
      <Card name="Edit툴" className="min-w-[510px] max-h-[807px]">
        <div className="flex items-center h-[8%] w-full px-6 py-5 font-bold text-3xl">Edit</div>
        <div className="px-[31px] w-full">
          {editArray.map((e) => {
            return (
              <div className="flex flex-col gap-3 justify-center items-start mb-2.5">
                <div className="flex w-full items-center justify-between">
                  <div>{e.content}</div>
                  <div className="flex items-center gap-2">
                    <Pencil />
                    <Check />
                  </div>
                </div>
                <EditTextArea data={e.state} />
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
