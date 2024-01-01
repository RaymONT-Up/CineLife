import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './ShowMoreButtons.module.scss';

interface ShowMoreButtonsProps {
  className?: string;
  hasMore: boolean;
  canHide: boolean;
  showMore: () => void;
  reset: () => void;

  showMoreText?: string;
  hideText?: string;

}

const ShowMoreButtons: FC<ShowMoreButtonsProps> = (props) => {
  const {
    className,
    hasMore,
    canHide,
    showMore,
    reset,
    showMoreText = 'Показать еще',
    hideText = 'Скрыть',
  } = props;
  return (
    <div className={classNames(cls.buttons, {}, [className])}>
      {hasMore && (
        <Button
          className={cls.showMore}
          onClick={showMore}
        >
          {showMoreText}
        </Button>
      )}

      {canHide && (
        <Button
          className={cls.hideItems}
          onClick={reset}
          theme={ButtonTheme.OUTLINE}
        >
          {hideText}
        </Button>
      )}

    </div>
  );
};

export default ShowMoreButtons;
