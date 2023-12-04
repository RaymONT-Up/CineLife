import { FC } from 'react';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import { getFilm } from 'pages/FilmPage/model/selectors/FilmPageSelectors';
import { useSelector } from 'react-redux';
import { FilmType } from 'shared/api/kinopoisk/models';
import TagsList, { TagsListTheme } from 'shared/ui/TagsList';
import minutesToHours from 'shared/lib/minutesToHours/minutesToHours';
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

  const countriesList = countries?.map((item) => item.country);
  const genresList = genres?.map((item) => item.genre);

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

        <FilmListItem name="Жанры">
          <TagsList className={cls.tagsList} list={genresList} />
        </FilmListItem>

        <FilmListItem name="Страны">
          <TagsList className={cls.tagsList} list={countriesList} theme={TagsListTheme.outline} />
        </FilmListItem>

        <FilmListItem name="Тип">
          {FilmType[type]}
        </FilmListItem>
        <FilmListItem name="Стартовый год">
          {startYear}
        </FilmListItem>
        <FilmListItem name="Конечный год">
          {endYear}
        </FilmListItem>
        <FilmListItem name="Состояние">
          {completed ? 'Завершен' : 'Продолжается'}
        </FilmListItem>

      </ul>

    </div>
  );
};

export default FilmInfo;
