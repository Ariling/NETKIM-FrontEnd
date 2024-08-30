import { useState, useEffect } from 'react';
interface NavBarProps {
  profileSetting: string;
  pressrelease?: string;
  reporter: string;
  onUpdateCurNavBar: (buttonText: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  profileSetting,
  pressrelease,
  reporter,
  onUpdateCurNavBar,
}) => {
  const [activeButton, setActiveButton] = useState(profileSetting);

  useEffect(() => {
    const savedActiveButton = localStorage.getItem('activeButton');
    if (savedActiveButton) {
      setActiveButton(savedActiveButton);
      onUpdateCurNavBar(savedActiveButton);
    }
  }, []);

  const handleClick = (buttonText: string) => {
    setActiveButton(buttonText);
    onUpdateCurNavBar(buttonText);
    localStorage.setItem('activeButton', buttonText);
  };

  return (
    <>
      <div className="flex flex-col">
        <div
          className={`border-b ${
            activeButton === profileSetting ? 'text-peach-text' : ''
          } hover:text-peach-semiThick active:text-peach-thick flex items-center`}
        >
          <button className="w-full text-center p-4" onClick={() => handleClick(profileSetting)}>
            {profileSetting}
          </button>
        </div>
        <div
          className={`border-b ${
            activeButton === reporter ? 'text-peach-text' : ''
          } hover:text-peach-semiThick active:text-peach-thick flex items-center`}
        >
          <button className="w-full text-center p-4" onClick={() => handleClick(reporter)}>
            {reporter}
          </button>
        </div>
        {pressrelease && (
          <div
            className={`border-b ${
              activeButton === pressrelease ? 'text-peach-text' : ''
            } hover:text-peach-semiThick active:text-peach-thick flex items-center`}
          >
            <button className="w-full text-center p-4" onClick={() => handleClick(pressrelease)}>
              {pressrelease}
            </button>
          </div>
        )}
      </div>
      <style>{`
        .border-b {
          border-bottom: 1px solid #d3d3d3;
        }
      `}</style>
    </>
  );
};

export default NavBar;
