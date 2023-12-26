import { useEffect } from 'react';

const useBodyLock = (isLocked: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const paddingRight = isLocked ? `${scrollBarWidth}px` : '0';

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = paddingRight;
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = '0';
    };
  }, [isLocked]);
};

export default useBodyLock;
