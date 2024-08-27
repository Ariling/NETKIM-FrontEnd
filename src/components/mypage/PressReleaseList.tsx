import { useEditStore } from '@/store/useEditStore';
import ListTableDesign from '../common/ListTableDesign';
import Download from '@assets/svg/Download.svg?react';

type TList = {
  id: number;
  name: string;
  date: string;
  fileUrl: string;
};

const PressReleaseList = () => {
  const { setOpen } = useEditStore((state) => state.actions);
  const lists: Array<TList> = [
    {
      id: 1,
      name: '레베카',
      date: '2024-08-27',
      fileUrl: '',
    },
  ];
  const handleFileDownload = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <ListTableDesign type="press">
      {lists.length > 0 ? (
        lists.map((list, index) => (
          <tr
            key={list.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index + 1}
            </th>
            <td className="px-4 py-4 text-center">{list.name}</td>
            <td className="px-4 py-4 text-center">{list.date}</td>
            <td className="px-3 py-4 text-center">
              <Download
                className="inline-block cursor-pointer"
                onClick={() => handleFileDownload(list.fileUrl)}
              />
            </td>
            <td className="px-4 py-4 text-center flex justify-center gap-2">
              <div
                className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer hover:bg-peach-semiThick active:bg-peach-thick"
                onClick={() => alert('저장버튼!')}
              >
                저장
              </div>
              <div
                className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer hover:bg-peach-semiThick active:bg-peach-thick"
                onClick={() => setOpen()}
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
