import EditPageCompo from '@/components/Edit/EditPageCompo';
import EditSearchCompo from '@/components/Edit/EditSearchCompo';
import EditSendCompo from '@/components/Edit/EditSendCompo';
import SendReporter from '@/components/Edit/SendReporter';
import { reducer } from '@/store/editReducer';
import { useEditStore } from '@/store/useEditStore';
import { useCallback, useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditOverView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { open } = useEditStore((state) => state.states);

  const handleBeforeUnload = useCallback((e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  }, []);
  // 현재 사파리 페이지 이동 빼고는 되는 것 확인
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    // 현재 페이지에 대한 히스토리 항목 추가
    window.history.pushState(null, '', location.pathname);

    const handlePopState = (event: PopStateEvent) => {
      if (window.confirm('정말로 페이지를 떠나시겠습니까? 떠나면 데이터는 유지되지 않습니다.')) {
        // 사용자가 확인하면 뒤로 가기
        navigate(-1);
      } else {
        // 사용자가 취소하면 현재 위치로 다시 푸시
        window.history.pushState(null, '', location.pathname);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handleBeforeUnload, navigate, location]);

  const [step, dispatch] = useReducer(reducer, 1);
  const [id, setId] = useReducer(reducer, 0);
  const getEditPage = (num: number) => {
    if (num === 1) return <EditSearchCompo state={step} dispath={dispatch} />;
    if (num === 2) return <EditPageCompo state={step} dispath={dispatch} id={id} setId={setId} />;
    if (num === 3) return <EditSendCompo id={id} />;
  };
  return (
    <>
      <div className="inline-block w-full h-screen bg-basic">{getEditPage(step)}</div>
      {open.open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-[rgba(221,221,221,0.4)] z-10">
          <SendReporter type="edit" />
        </div>
      )}
    </>
  );
};

export default EditOverView;
