import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import ShowMoreButtons from 'shared/ui/ShowMoreButtons';
import useShowMore from 'shared/lib/hooks/useShowMore/useShowMore';
import cls from './Facts.module.scss';

interface FactsProps {
  items: string[];
  className?: string;
  defaultShowCount?: number;
  showMoreCount?: number;
  isHTML?: boolean;
}

const Facts: FC<FactsProps> = (props) => {
  const {
    className,
    items = [],
    defaultShowCount = 4,
    showMoreCount = defaultShowCount * 2,
    isHTML = false,
  } = props;

  const {
    visibleItems, hasMore, showMore, reset, canHide,
  } = useShowMore(items, showMoreCount, defaultShowCount);

  return (
    <div className={classNames(cls.Facts, {}, [className])}>

      <ul>
        {visibleItems.map((item, index) => (
          <li className={cls.Fact} key={index}>
            {isHTML ? (
              <div dangerouslySetInnerHTML={{ __html: item }} />
            ) : (
              item
            )}
          </li>
        ))}

      </ul>

      <ShowMoreButtons
        hasMore={hasMore}
        canHide={canHide}
        showMore={showMore}
        reset={reset}
      />

    </div>
  );
};

export default Facts;
