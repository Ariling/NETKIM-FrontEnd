import { getAdminApi, postAdminApi } from '@/apis/adminapi';
import Download from '@assets/svg/Download.svg?react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListTable = () => {
  const router = useNavigate();
  const [dataList, setDataList] = useState<Array<any>>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getRole = async () => {
      const result = await getAdminApi();
      if (result?.status === 200) {
        setDataList(result.data);
      } else if (result?.status === 400) {
        alert('어드민 외 접근할 수 없습니다.');
        navigate('/');
      }
    };
    getRole();
  }, []);
  const handleFileDownload = (url: string) => {
    window.open(url, '_blank');
  };
  const onRoleUp = async (id: number, name: string) => {
    const result = await postAdminApi(id, name);
    if (result?.status === 200) {
      alert('권한이 부여되었습니다');
      router(0);
    } else {
      alert('에러가 발생했습니다');
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto w-full">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-neutral-100 text-center">
              <th scope="col" className="px-3 py-3 w-1/6">
                NO
              </th>
              <th scope="col" className="px-4 py-3 w-1/3">
                회사명
              </th>
              <th scope="col" className="px-3 py-3 w-1/6">
                파일
              </th>
              <th scope="col" className="px-4 py-3 w-1/3"></th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((list, index) => (
                <tr
                  key={list.memberIdx}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-4 py-4 text-center">{list.company}</td>
                  <td className="px-3 py-4 text-center">
                    <Download
                      className="inline-block cursor-pointer"
                      onClick={() => handleFileDownload(list.certificateImg)}
                    />
                  </td>
                  <td className="px-4 py-4 text-center flex justify-center gap-2">
                    <div
                      className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer hover:bg-peach-semiThick active:bg-peach-thick"
                      onClick={() => onRoleUp(list.memberIdx, list.company)}
                    >
                      수락
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="pt-10 text-center">
                  신청한 일정이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTable;
