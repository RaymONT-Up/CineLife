import { FC } from 'react';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import minutesToHours from 'shared/lib/minutesToHours/MinutesToHours';
import { getFilm } from 'pages/FilmPage/model/selectors/FilmPageSelectors';
import { useSelector } from 'react-redux';
import { CatalogTypeOptions, FilmType } from 'shared/api/kinopoisk/models';
import cls from './FilmInfo.module.scss';
import FilmListItem from './FilmListItem/FilmListItem';

// interface FilmInfoProps {
//   className?: string;
//   nameRu: string;
//   year: number;
//   slogan: string;
//   genres: string[];
//   completed: boolean;
//   type: catalogTypeTypes;
//   filmLength: number;
//   ratingAgeLimits: number;
// }

const FilmInfo: FC = (props) => {
  const filmData = useSelector(getFilm);

  const {
    nameRu,
    description,
    posterUrl,
    ratingAgeLimits,
    coverUrl,
    logoUrl,
    year,
    slogan,
    genres,
    countries,
    startYear,
    completed,
    endYear,
    type,
    filmLength,
  } = filmData;
  return (
    <div className={cls.FilmInfo}>
      <Title
        className={cls.title}
        theme={TitleTheme.hero}
        Tag={TitleTags.h1}
      >
        {nameRu}
      </Title>

      <ul>
        <FilmListItem name="Год">
          {year}
        </FilmListItem>
        <FilmListItem name="Время">
          {`${minutesToHours(filmLength)} / ${filmLength} мин.`}
        </FilmListItem>
        <FilmListItem name="Слоган">
          {slogan}
        </FilmListItem>
        <FilmListItem name="Возраст">
          {`${ratingAgeLimits?.replace('age', '')}+`}
        </FilmListItem>
        <FilmListItem name="Слоган">
          {slogan}
        </FilmListItem>
        <FilmListItem name="Тип">
          {FilmType[type?.toUpperCase()]}
        </FilmListItem>
        <FilmListItem name="Стартовый год">
          {startYear}
        </FilmListItem>
        <FilmListItem name="Конечный год">
          {endYear}
        </FilmListItem>
        <FilmListItem name="Состояние">
          {completed}
        </FilmListItem>
      </ul>

    </div>
  );
};

export default FilmInfo;
