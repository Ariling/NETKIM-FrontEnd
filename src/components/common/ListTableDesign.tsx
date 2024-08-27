import { AdminHead, PressReleaseHead, ReporterHead } from '@/constants/THead';
import { ReactNode, useEffect, useState } from 'react';

interface IDesignList {
  children: ReactNode;
  type: string;
}

const ListTableDesign = ({ children, type }: IDesignList) => {
  const [headlist, setHeadList] = useState<string[]>([]);
  useEffect(() => {
    if (type === 'admin') {
      setHeadList(AdminHead);
    } else if (type === 'press') {
      setHeadList(PressReleaseHead);
    } else setHeadList(ReporterHead);
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto w-full">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-neutral-100 text-center">
              {headlist.map((e, i) => {
                return (
                  <th scope="col" className="px-3 py-3 w-auto" key={e}>
                    {e}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default ListTableDesign;
