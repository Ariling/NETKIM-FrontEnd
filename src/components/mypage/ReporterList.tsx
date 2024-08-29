import { TReport, useReportStore } from '@/store/useReportStore';
import ListTableDesign from '../common/ListTableDesign';
import { useEffect, useState } from 'react';
import { deleteReporterApi } from '@/apis/reporterapi';

const ReporterList = ({ type }: { type: string }) => {
  const { reporterArray } = useReportStore((state) => state.states);
  const [list, setList] = useState<Array<TReport>>([]);
  useEffect(() => {
    setList(reporterArray.filter((e) => e.reporterType === type));
  }, [type]);
  const onDelete = async (reportId: number) => {
    const result = await deleteReporterApi(reportId);
    if (result?.status === 200) {
      alert('삭제되었습니다.');
      setList(list.filter((e) => e.reporterId !== reportId));
    } else {
      alert('삭제 실패');
    }
  };
  return (
    <ListTableDesign type="reporter">
      {list.length > 0 ? (
        list.map((list, index) => (
          <tr
            key={list.reporterId}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>
            <td className="px-4 py-4 text-center">{list.email}</td>
            <td className="px-4 py-4 text-center">{list.reporterName}</td>
            <td className="px-4 py-4 text-center flex justify-center gap-2">
              <div
                className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer hover:bg-peach-semiThick active:bg-peach-thick"
                onClick={() => onDelete(list.reporterId)}
              >
                삭제하기
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6} className="pt-10 text-center">
            등록된 기자가 없습니다.
          </td>
        </tr>
      )}
    </ListTableDesign>
  );
};

export default ReporterList;
