import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Edit from '@assets/svg/Edit.svg?react';
import Logout from '@assets/svg/Logout.svg?react';
import Profile from '@assets/svg/Userprofile.svg?react';
import Down from '@assets/svg/Down.svg?react';
import Logo from '@assets/img/Logo.png';
import ProfileImg from '@assets/img/Preview.webp';

const Nav = () => {
  const navigate = useNavigate();
  let isLogin = localStorage.getItem('accessToken') ? true : false;

  // 프로필 버튼 창 상태
  const [profileModal, setProfileModal] = useState<Boolean>(false);
  // 프로필 버튼 참조
  const buttonRef = useRef<HTMLDivElement>(null);
  // 프로필 모달 참조
  const modalRef = useRef<HTMLDivElement>(null);
  // 프로필 모달이 아닌 곳을 누르면 (버튼 포함) 모달이 꺼짐
  useEffect(() => {
    const clickOutside = (e: any) => {
      if (
        profileModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setProfileModal(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [profileModal]);

  // 모바일 네브바 메뉴 상태
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  // 경로 변경 시 메뉴 닫기
  useEffect(() => {
    setMobileMenu(false);
  }, [window.location.href]);
  // 네브바 메뉴 참조
  const menuRef = useRef<HTMLDivElement>(null);
  // 네브바 참조
  const containerRef = useRef<HTMLDivElement>(null);
  // 네브바가 아닌 곳 또는 버튼을 누르면 메뉴가 꺼짐
  useEffect(() => {
    const clickOutside = (e: any) => {
      if (
        mobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [mobileMenu]);

  // 네비게이션 바 스크롤 감지에 따른 상태
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState<Boolean | undefined>(undefined);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      // 프로필 모달(마이페이지, 로그아웃 창)이 켜져 있거나 모바일 메뉴 바가 열려 있으면 스크롤 내려도 없어지지 않음
      if (!profileModal && !mobileMenu) setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position, profileModal, mobileMenu]);

  return (
    <div className="fixed top-0 z-[1000] w-full h-14 bg-white flex justify-center items-center border-b-border-1 border-b-gray-border">
      <div className=" box-border relative w-full px-4 py-10 flex justify-between items-center">
        <div className="w-3/5 flex justify-start items-center gap-4">
          <span className="cursor-pointer" onClick={() => navigate('/')}>
            <img src={Logo} alt="로고이미지" width={140} height={40} />
          </span>
        </div>

        <div className="w-1/5 flex justify-end items-center">
          {isLogin ? (
            <div
              ref={buttonRef}
              onClick={() => setProfileModal((pre) => !pre)}
              className="flex items-center gap-1.5"
              style={{
                backgroundColor: profileModal ? 'var(--grey-300, #eaecee)' : '',
              }}
            >
              <div className="profile-img">
                <img src={ProfileImg} alt="프로필 이미지" width={36} height={36} />
              </div>
              <Down
                style={{
                  transform: profileModal ? 'rotate(0deg)' : 'rotate(180deg)',
                  stroke: '#868C94',
                }}
              />
            </div>
          ) : (
            <button onClick={() => navigate('/login')}>로그인</button>
          )}
        </div>
        {profileModal && (
          <div
            className="absolute top-24 right-4 z-[999] w-32 h-[128px] rounded-md bg-white flex flex-col justify-center items-center"
            ref={modalRef}
          >
            <div
              onClick={() => {
                navigate('/edit');
                setProfileModal((pre) => !pre);
              }}
              className="flex items-center gap-2 w-[120px] h-10 rounded cursor-pointer text-base"
            >
              <Edit />
              편집페이지
            </div>
            <div
              onClick={() => {
                navigate('/mypage');
                setProfileModal((pre) => !pre);
              }}
              className="flex items-center gap-2 w-[120px] h-10 rounded cursor-pointer text-base"
            >
              <Profile />
              마이페이지
            </div>
            <div
              onClick={() => {
                setProfileModal((pre) => !pre);
                localStorage.removeItem('accessToken');
                navigate('/');
              }}
              className="flex items-center gap-2 w-[120px] h-10 rounded cursor-pointer text-base"
            >
              <Logout />
              로그아웃
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
