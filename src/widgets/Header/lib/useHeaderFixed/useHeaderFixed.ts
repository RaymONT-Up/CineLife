import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderFixed = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const lastScrollTop = useRef<number>(0);
  const screenOffset = useRef<number>(window.innerHeight * 0.3);
  const location = useLocation();

  // useEffect(() => {
  //   // when page change

  //   setIsFixed(false);
  // }, [location.pathname]);

  useEffect(() => {
    const headerFixed = () => {
      const scrollDistance = window.scrollY;
      const isScrolledPast = scrollDistance > screenOffset.current;

      if (isScrolledPast) {
        const isFixed = scrollDistance > lastScrollTop.current;
        setIsFixed(isFixed);
      }

      lastScrollTop.current = scrollDistance;
    };

    window.addEventListener('scroll', headerFixed, { passive: true });

    return () => window.removeEventListener('scroll', headerFixed);
  }, []);

  return {
    isFixed,
    setIsFixed,
  };
};

export default useHeaderFixed;
