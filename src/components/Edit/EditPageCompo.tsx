import Card from '../common/Card';
import EditTextArea from './EditTextArea';
import Btn from '../common/Btn';
import { Dispatch, useEffect, useState } from 'react';
import { NumAction, NumberReducer } from '@/store/editReducer';
import preview from '@assets/img/Preview.webp';
import { useEditStore } from '@/store/useEditStore';
import { getPrfInfoApi, postPressReleaseApi, previewApi } from '@/apis/pressapi';

interface IPreview {
  poster: string;
  headLine: string;
  content: string;
}

const EditPageCompo = (
  props: NumberReducer & {
    id: number;
    setId: Dispatch<NumAction>;
  }
) => {
  const editArray = [
    { state: 'key', content: '키워드*' },
    { state: 'actors', content: '등장인물*' },
    { state: 'synopsis', content: '줄거리*' },
    { state: 'seats', content: '좌석수' },
    { state: 'interviewee', content: '인터뷰 인물' },
    { state: 'interviewContent', content: '인터뷰 내용' },
  ];
  const [check, setCheck] = useState(Array.from(Array(editArray.length), (_) => false));
  const [show, setShow] = useState(false);
  const [previewData, setPreview] = useState<IPreview>({
    poster: '',
    headLine: '',
    content: '',
  });
  const { searchProp, editProp } = useEditStore((state) => state.states);
  const { setEditData } = useEditStore((state) => state.actions);
  useEffect(() => {
    const getData = async () => {
      const result = await getPrfInfoApi(searchProp.title);
      if (result?.status === 200) {
        setEditData({
          performanceId: result.data.prfid,
          key: '',
          actors: result.data.prfcast,
          synopsis: '',
          seats: 0,
          interviewee: '',
          interviewContent: '',
        });
      }
    };
    getData();
  }, []);
  const onPreview = async () => {
    const result = await previewApi(
      editProp.performanceId,
      editProp.key,
      editProp.synopsis,
      editProp.actors,
      editProp.seats,
      editProp.interviewee,
      editProp.interviewContent
    );
    if (result?.status === 200) {
      setPreview({
        poster: result.data.performance.poster,
        headLine: result.data.headLine,
        content: result.data.content,
      });
    }
  };
  const onMake = async () => {
    const result = await postPressReleaseApi(
      editProp.performanceId,
      editProp.key,
      editProp.synopsis,
      editProp.actors,
      editProp.seats,
      editProp.interviewee,
      editProp.interviewContent
    );
    if (result?.status === 200) {
      props.setId({ type: 'CHANGE', payload: result.data.pressReleaseId });
      props.dispath({ type: 'PLUS' });
    } else {
      alert('생성 실패! 잠시만 기다려주세요');
    }
  };
  return (
    <div className="mt-20 w-full h-full flex justify-center gap-12">
      <Card name="Edit툴" className="min-w-[510px] max-h-[907px]">
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
              onPreview();
              setShow(true);
            }}
            name="프리뷰 생성하기"
            className="edit_btn bg-peach"
          />
          <Btn
            onClick={() => {
              if (check.slice(0, 3).every((item) => item === true)) {
                onMake();
              } else {
                alert('필수에 체크해주세요');
              }
            }}
            name="보도자료 생성하기"
            className="edit_btn bg-peach-thick"
          />
        </div>
      </Card>
      <Card name="미리보기" className="relative w-[672px] max-h-[907px]">
        {show ? (
          <div>
            <div>{previewData.headLine}</div>
            <img src={previewData.poster} />
            <div>{previewData.content}</div>
          </div>
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
