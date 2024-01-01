import { useState, useCallback } from 'react';

interface ShowMoreResult {
  visibleItems: any[];
  hasMore: boolean;
  showMore: () => void;
  reset: () => void;
  canHide: boolean;
}

const useShowMore = (
  array: any[],
  increment: number = 15,
  initShowItems: number = 5,
): ShowMoreResult => {
  const [visibleItems, setVisibleItems] = useState(array.slice(0, initShowItems));
  const hasMore = array.length > visibleItems.length;
  const canHide = visibleItems.length > initShowItems;

  const showMore = useCallback(() => {
    const nextVisibleItems = array.slice(0, visibleItems.length + increment);
    setVisibleItems(nextVisibleItems);
  }, [visibleItems, array, increment]);

  const reset = useCallback(() => {
    setVisibleItems(array.slice(0, initShowItems));
  }, [array, initShowItems]);

  return {
    visibleItems, hasMore, showMore, reset, canHide,
  };
};

export default useShowMore;
