import { FC } from 'react';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import {
  FilmType, catalogTypeTypes, countriesList, genresList,
} from 'shared/api/kinopoisk/models';
import TagsList, { TagsListTheme } from 'shared/ui/TagsList';
import minutesToHours from 'shared/lib/minutesToHours/minutesToHours';
import Rating from 'shared/ui/Rating';
import cls from './FilmInfo.module.scss';
import FilmListItem from './FilmListItem/FilmListItem';

interface FilmInfoProps {
  className?: string;
  nameRu: string;
  year: number;
  slogan: string;
  genres: genresList;
  countries: countriesList;
  startYear: number;
  endYear: number;
  type: catalogTypeTypes;
  filmLength: number;
  ratingAgeLimits: string;
  rating: number;
}

const FilmInfo: FC<FilmInfoProps> = (props) => {
  const {
    nameRu,
    ratingAgeLimits,
    year,
    slogan,
    genres,
    countries,
    startYear,
    endYear,
    type,
    filmLength,
    rating,
  } = props;

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
          {filmLength && `${minutesToHours(filmLength)} / ${filmLength} мин.`}
        </FilmListItem>
        <FilmListItem name="Слоган">
          {slogan}
        </FilmListItem>
        <FilmListItem name="Возраст">
          {ratingAgeLimits && `${ratingAgeLimits?.replace('age', '')}+`}
        </FilmListItem>

        <FilmListItem name="Жанры">
          <TagsList className={cls.tagsList} list={genresList} />
        </FilmListItem>

        <FilmListItem name="Страны">
          <TagsList className={cls.tagsList} list={countriesList} theme={TagsListTheme.outline} />
        </FilmListItem>
        <FilmListItem name="Рейтинг">
          <Rating rating={rating} />
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
        {/* <FilmListItem name="Состояние">
          {completed ? 'Завершен' : 'Продолжается'}
        </FilmListItem> */}

      </ul>

    </div>
  );
};

export default FilmInfo;
