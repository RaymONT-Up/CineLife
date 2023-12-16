import React, { FC, ReactNode, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './Facts.module.scss';

interface FactsProps {
  items: string[];
  className?: string;
  defaultShowCount?: number;
  showMoreCount?: number;
  isHTML?: boolean;
  withTitle?: boolean
}

const Facts: FC<FactsProps> = (props) => {
  const {
    className,
    items = [],
    defaultShowCount = 6,
    showMoreCount = defaultShowCount,
    isHTML = false,
  } = props;

  const length = items?.length;

  const [displayCount, setDisplayCount] = useState(defaultShowCount);

  const hasMore = length - displayCount > 0;

  const displayedFacts = items?.slice(0, displayCount);

  const showMore = () => {
    setDisplayCount((prevCount) => prevCount + showMoreCount);
  };

  const closeMore = () => {
    setDisplayCount(showMoreCount);
  };

  return (
    <div className={classNames(cls.Facts, {}, [className])}>

      <ul>

        {displayedFacts.map((item, index) => (
          <li className={cls.Fact} key={index}>
            {isHTML ? (
              <div dangerouslySetInnerHTML={{ __html: item }} />
            ) : (
              item
            )}
          </li>
        ))}

      </ul>

      {length > defaultShowCount && (
        <div className={cls.buttons}>

          {hasMore && (
          <Button className={cls.showMore} onClick={showMore}>
            Показать еще
          </Button>
          )}

          {displayCount > defaultShowCount && (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={closeMore}
            >
              Скрыть
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Facts;
