import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { FilmPreview } from 'shared/api/kinopoisk/models';
import cls from './FilmPreviewCard.module.scss';

interface FilmPreviewCardProps extends FilmPreview{
  className?: string;
}

const FilmPreviewCard: FC<FilmPreviewCardProps> = (props) => {
  const {
    className, posterUrl, nameRu, year, ratingKinopoisk,
  } = props;
  return (
    <li className={classNames(cls.FilmPreviewCard, {}, [className])}>
      <div className={classNames(cls.rating)}>
        {ratingKinopoisk}
      </div>
      <img className={cls.img} src={posterUrl} alt={`Постер для фильма ${nameRu}`} />
      <div className={cls.info}>
        <h6 className={cls.name}>
          {nameRu}
        </h6>
        <div className={cls.year}>{year}</div>
      </div>
    </li>
  );
};

export default FilmPreviewCard;
