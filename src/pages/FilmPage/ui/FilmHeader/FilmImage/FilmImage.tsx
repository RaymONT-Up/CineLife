import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './FilmImage.module.scss';

interface FilmImageProps {
  className?: string;
  alt: string;
  src: string;
}

const FilmImage: FC<FilmImageProps> = (props) => {
  const {
    className, alt, src,
  } = props;
  return (
    <div className={classNames(cls.imgWrapper, {}, [className])}>
      <img className={cls.img} alt={alt} src={src} />
    </div>
  );
};

export default FilmImage;
