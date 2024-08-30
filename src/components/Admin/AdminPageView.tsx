import { useState } from 'react';
import NavBar from '../mypage/NavBar';
import ListTable from './ListTable';
import ReporterSetting from '../mypage/ReporterSetting';

const navBarData = {
  profileSetting: '유저관리',
  reporter: '기자관리',
};

const AdminPageView = () => {
  const [curNavBar, setCurNavBar] = useState(navBarData.profileSetting);
  const onUpdateCurNavBar = (text: string) => {
    setCurNavBar(text);
  };
  return (
    <>
      <div className="w-full top-[90px] left-0 overflow-hidden relative">
        <div className="flex justify-center h-[800px]">
          <div className="w-96 ml-36">
            <div className="p-8">
              <NavBar {...navBarData} onUpdateCurNavBar={onUpdateCurNavBar} />
            </div>
          </div>
          <div className="w-full relative p-3">
            <div>
              {curNavBar === navBarData.profileSetting ? (
                <div className="mt-20 w-4/5 max-w-[800px] mx-auto overflow-y-scroll">
                  <ListTable />
                </div>
              ) : null}
            </div>
            <div>{curNavBar === navBarData.reporter ? <ReporterSetting type="admin" /> : null}</div>
          </div>
        </div>
      </div>
    </>
  );
  return <div>AdminPageView</div>;
};

export default AdminPageView;
