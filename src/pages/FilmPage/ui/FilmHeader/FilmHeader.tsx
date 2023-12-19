import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getFilm } from 'pages/FilmPage/model/selectors/FilmPageSelectors';
import cls from './FilmHeader.module.scss';
import FilmImage from './FilmImage/FilmImage';
import FilmInfo from './FilmInfo/FilmInfo';

interface FilmHeaderProps {
  className?: string;
}

const FilmHeader: FC<FilmHeaderProps> = (props) => {
  const { className } = props;

  const filmData = useSelector(getFilm);
  const {
    ratingKinopoisk,
    nameRu,
    posterUrl,
    ratingAgeLimits,
    year,
    slogan,
    genres,
    countries,
    startYear,
    endYear,
    type,
    filmLength,
    coverUrl,
    logoUrl,
    nameOriginal,
  } = filmData;

  return (
    <div
      className={classNames(cls.FilmHeader, {}, [className])}
    >
      <div
        className={cls.coverBg}
        style={{ backgroundImage: `url(${coverUrl})` }}
      />
      <div className={cls.content}>
        <FilmImage
          src={posterUrl}
          alt={`${nameRu} Обложка`}
        />
        <FilmInfo
          nameRu={nameRu}
          ratingAgeLimits={ratingAgeLimits}
          year={year}
          slogan={slogan}
          countries={countries}
          genres={genres}
          startYear={startYear}
          endYear={endYear}
          type={type}
          filmLength={filmLength}
          rating={ratingKinopoisk}
        />
      </div>

    </div>
  );
};

export default FilmHeader;
