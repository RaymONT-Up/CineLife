import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './FilmInfo.module.scss';

interface FilmInfoProps {
  className?: string;
}

const FilmInfo: FC<FilmInfoProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.FilmInfo, {}, [className])}>
      decomp later..
    </div>
  );
};

export default FilmInfo;
