import React, { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ListGrid.module.scss';

interface ListGridProps {
  className?: string;
  children: ReactNode; // only li
}

const ListGrid: FC<ListGridProps> = (props) => {
  const { className, children } = props;

  // const childArray = React.Children.toArray(children);

  // if (!childArray.every((child) => React.isValidElement(child) && (child.type === 'li' || child.type === 'LI'))) {
  //   throw new Error('ListGrid should only contain li elements');
  // }

  return (
    <ul className={classNames(cls.ListGrid, {}, [className])}>
      {children}
    </ul>
  );
};

export default ListGrid;
