import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Pagination.module.scss';

interface PaginationProps {
  className?: string;
  current?: number;
  pages: number[];

  total: number;
  perPage: number;

  onClick: () => number;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Pagination, {}, [className])}>
      pag
    </div>
  );
};

export default Pagination;
