import ListTableDesign from '../common/ListTableDesign';
import Download from '@assets/svg/Download.svg?react';
import { useEffect, useState } from 'react';
import { getPressReleaseApi, sendPressReleaseApi } from '@/apis/pressapi';
import { useNavigate } from 'react-router-dom';

const PressReleaseList = () => {
  const [dataList, setDataList] = useState<Array<any>>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const result = await getPressReleaseApi();
      if (result?.status === 200) {
        setDataList(result.data);
      }
    };
    getData();
  }, []);
  const handleFileDownload = (url: string) => {
    window.open(url, '_blank');
  };
  const sendApi = async (pressReleaseId: number, type: string) => {
    const result = await sendPressReleaseApi(pressReleaseId);
    if (result?.status === 200) {
      alert('기자 메일로 전송되었습니다.');
      if (type === 'edit') {
        navigate('/');
      } else {
        navigate(0);
      }
    } else {
      alert('에러 발생');
    }
  };
  // const fileDownload = async (pressReleaseId: number) => {
  //   const result = await getDownloadPress(pressReleaseId);
  //   if (result?.status === 200) {
  //     console.log(result);
  //   } else {
  //     alert('저장 실패');
  //   }
  // };
  return (
    <ListTableDesign type="press">
      {dataList.length > 0 ? (
        dataList.map((list, index) => (
          <tr
            key={list.pressReleaseId}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>
            <td className="px-4 py-4 text-center">{list.performance.prfnm}</td>
            <td className="px-4 py-4 text-center">{list.performance.prfstate}</td>
            <td className="px-3 py-4 text-center">
              <Download
                className="inline-block cursor-pointer"
                onClick={() => handleFileDownload(list.filename)}
              />
            </td>
            <td className="px-4 py-4 text-center flex justify-center gap-2">
              <div
                className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer hover:bg-peach-semiThick active:bg-peach-thick"
                onClick={() => sendApi(list.pressReleaseId, 'mypage')}
              >
                기자발송
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6} className="pt-10 text-center">
            작성한 보도자료가 없습니다.
          </td>
        </tr>
      )}
    </ListTableDesign>
  );
};

export default PressReleaseList;
