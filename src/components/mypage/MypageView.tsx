import { useState } from 'react';

import ProfileSetting from '@components/mypage/ProfileSetting';
import PressSetting from './PressSetting';
import ReporterSetting from './ReporterSetting';
import NavBar from './NavBar';

const navBarData = {
  profileSetting: '프로필',
  pressrelease: '보도자료',
  reporter: '기자관리',
};

const MyPageView = () => {
  const [curNavBar, setCurNavBar] = useState(navBarData.profileSetting);

  // 선택한 네비게이션 바의 변경을 담당하는 함수
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
            <div>{curNavBar === navBarData.profileSetting ? <ProfileSetting /> : null}</div>

            <div>{curNavBar === navBarData.pressrelease ? <PressSetting /> : null}</div>

            <div>{curNavBar === navBarData.reporter ? <ReporterSetting /> : null}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageView;
