import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useIsMobileView = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobileView, setIsMobileView] = useState<boolean>(width > 640);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 200);
    window.addEventListener(`resize`, handleResize);
    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 640) setIsMobileView(true);
    else setIsMobileView(false);
  }, [width]);

  return {
    isMobileView,
  };
};

export default useIsMobileView;
