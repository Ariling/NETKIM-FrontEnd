import ListTableDesign from '../common/ListTableDesign';

type TList = {
  id: number;
  email: string;
};

const ReporterList = () => {
  // lists는 query data로 넘길 예정.. 그냥 그게 맘이 편할 것 같아
  const lists: Array<TList> = [
    {
      id: 1,
      email: '얄라리',
    },
  ];
  return (
    <ListTableDesign type="reporter">
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
            <td className="px-4 py-4 text-center">{list.email}</td>
            <td className="px-4 py-4 text-center flex justify-center gap-2">
              <div
                className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer hover:bg-peach-semiThick active:bg-peach-thick"
                onClick={() => alert('저장버튼!')}
              >
                삭제하기
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

export default ReporterList;
