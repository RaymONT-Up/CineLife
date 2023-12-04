import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './FilmListItem.module.scss';

interface FilmListItemProps {
  className?: string;
  name: string;
  value: string | [];
}

const FilmListItem: FC<FilmListItemProps> = (props) => {
  const { className, name, value } = props;
  return (
    <li className={cls.item}>
      <h6 className={cls.item__name}>
        {name}
      </h6>
      {value}
    </li>
  );
};

export default FilmListItem;
