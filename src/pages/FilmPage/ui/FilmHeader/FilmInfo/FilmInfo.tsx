import { FC } from 'react';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import {
  FilmType, catalogTypeTypes, countriesList, genresList,
} from 'shared/api/kinopoisk/models';
import TagsList, { TagsListTheme } from 'shared/ui/TagsList';
import minutesToHours from 'shared/lib/minutesToHours/minutesToHours';
import Rating from 'shared/ui/Rating';
import InfoListItem from 'shared/ui/InfoListIem';
import { findValueOption } from 'shared/ui/Select';
import { catalogCountriesSelectOptions, findIdCountryByString, findIdGenreByString } from 'shared/config/catalogFilter/catalogFilter';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import cls from './FilmInfo.module.scss';

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

  const countriesList = countries?.map((item) => {
    const id = findIdCountryByString(item.country);

    return {
      label: item.country,
      to: `${RoutePath.catalog}?${catalogURLParams.country}=${id}`,
    };
  });

  const genresList = genres?.map((item) => {
    const id = findIdGenreByString(item.genre);

    return {
      label: item.genre,
      to: `${RoutePath.catalog}?${catalogURLParams.genre}=${id}`,
    };
  });

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
        <InfoListItem name="Год">
          {year}
        </InfoListItem>
        <InfoListItem isVisible={filmLength} name="Время">
          {`${minutesToHours(filmLength)} / ${filmLength} мин.`}
        </InfoListItem>
        <InfoListItem isVerticalCentered={false} name="Слоган">
          {slogan}
        </InfoListItem>
        <InfoListItem isVisible={ratingAgeLimits} name="Возраст">
          {ratingAgeLimits && `${ratingAgeLimits?.replace('age', '')}+`}
        </InfoListItem>

        <InfoListItem
          isVerticalCentered={false}
          isVisible={genresList?.length !== 0}
          name="Жанры"
        >
          <TagsList className={cls.tagsList} list={genresList} />
        </InfoListItem>

        <InfoListItem
          isVerticalCentered={false}
          isVisible={countriesList?.length !== 0}
          name="Страны"
        >
          <TagsList
            className={cls.tagsList}
            list={countriesList}
            theme={TagsListTheme.outline}
          />
        </InfoListItem>
        <InfoListItem name="Рейтинг">
          <Rating rating={rating} />
        </InfoListItem>
        <InfoListItem name="Тип">
          {FilmType[type]}
        </InfoListItem>
        <InfoListItem name="Стартовый год">
          {startYear}
        </InfoListItem>
        <InfoListItem name="Конечный год">
          {endYear}
        </InfoListItem>
        {/* <FilmListItem name="Состояние">
          {completed ? 'Завершен' : 'Продолжается'}
        </FilmListItem> */}

      </ul>

    </div>
  );
};

export default FilmInfo;
