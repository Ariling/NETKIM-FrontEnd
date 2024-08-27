import { useEditStore } from '@/store/useEditStore';
import Check from '@assets/svg/Checkbox.svg?react';
import UnCheck from '@assets/svg/UnCheckbox.svg?react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface TList {
  email: string;
  type: string;
}

const SendReporter = ({ type }: { type: string }) => {
  const { setOpen } = useEditStore((state) => state.actions);
  const [reporterList, setReporterList] = useState<TList[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 여기서 실제 서버 데이터를 가져오는 API 호출을 수행합니다.
    // 예시로 하드코딩된 데이터를 사용합니다.
    const fetchedData: TList[] = [
      { email: 'www@naver.com', type: '기자' },
      { email: 'park@naver.com', type: '인플루언서' },
    ];
    setReporterList(fetchedData);
  }, []);

  const toggleEmailSelection = (email: string) => {
    setSelectedEmails((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  return (
    <>
      <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[880px] h-[600px] text-center p-4 rounded-3xl z-30">
        <div className="p-4 text-3xl font-bold">Send List</div>
        <div className="w-full h-[65%] overflow-y-scroll">
          {reporterList.map((reporter, i) => {
            return (
              <div
                className="w-full flex items-center justify-center gap-10 mb-4"
                key={reporter.email}
              >
                <div className="w-[50px]">{i + 1}</div>
                <div className="w-[400px]">{reporter.email}</div>
                <div className="w-[100px]">{reporter.type}</div>
                <div>
                  {' '}
                  {selectedEmails.includes(reporter.email) ? (
                    <Check onClick={() => toggleEmailSelection(reporter.email)} />
                  ) : (
                    <UnCheck onClick={() => toggleEmailSelection(reporter.email)} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2.5 mt-10">
          <button
            className="w-20 bg-peach-semiThick p-2 rounded-md"
            onClick={() => {
              if (selectedEmails.length === 0) {
                alert('한 명 이상 체크해주세요');
              } else {
                alert('발송 성공');
                if (type === 'edit') {
                  navigate('/');
                }
                setOpen();
              }
            }}
          >
            발송하기
          </button>
          <button
            className="w-20 bg-neutral-200 p-2 rounded-md"
            onClick={() => {
              setOpen();
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </>
  );
};

export default SendReporter;
