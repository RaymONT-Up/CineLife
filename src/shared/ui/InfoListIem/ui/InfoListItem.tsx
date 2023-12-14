import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './InfoListItem.module.scss';

interface InfoListItemProps {
  className?: string;
  isVisible?: boolean | any;
  isVerticalCentered?: boolean;
  isWrap?: boolean;

  name: string;
  children: ReactNode;
}

const InfoListItem: FC<InfoListItemProps> = (props) => {
  const {
    className,
    name,
    children,
    isVerticalCentered = true,
    isVisible = undefined,
    isWrap = false,
  } = props;

  const itemVisible = isVisible === undefined ? children : isVisible;

  return (
    <>
      {!!itemVisible && (
      <li className={classNames(
        cls.item,
        {
          [cls.wrap]: isWrap,
          [cls.isVerticalCentered]: isVerticalCentered,
        },

        [className],
      )}
      >
        <h6 className={cls.item__name}>
          {`${name}:`}
        </h6>
        <div className={cls.item__value}>
          {children}
        </div>
      </li>
      )}
    </>
  );
};

export default InfoListItem;
