import { useEffect, useRef } from 'react';

export interface IntersectionObserverInit {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  trackVisibility?: boolean;
  delay?: number;
}

const useObserverApi = (
  callback: () => void,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    delay: 500,
  },
) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, options]);

  return { targetRef };
};

export default useObserverApi;
