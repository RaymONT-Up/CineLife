import { FC, ReactNode } from 'react';
import cls from './FilmListItem.module.scss';

interface FilmListItemProps {
  className?: string;
  name: string;
  children: ReactNode;
}

const FilmListItem: FC<FilmListItemProps> = (props) => {
  const { className, name, children } = props;
  return (
    <>
      {children && (
      <li className={cls.item}>
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

export default FilmListItem;
