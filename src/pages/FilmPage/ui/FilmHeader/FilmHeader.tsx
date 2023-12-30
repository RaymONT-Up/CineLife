import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getFilm } from 'pages/FilmPage/model/selectors/FilmPageSelectors';
import PageHeaderInfo from 'shared/ui/PageHeaderInfo/ui/PageHeaderInfo';
import InfoListItem from 'shared/ui/InfoListIem';
import minutesToHours from 'shared/lib/minutesToHours/minutesToHours';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { findIdCountryByString, findIdGenreByString } from 'shared/config/catalogFilter/catalogFilter';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import TagsList, { TagsListTheme } from 'shared/ui/TagsList';
import Rating from 'shared/ui/Rating';
import { FilmType } from 'shared/api/kinopoisk/models';
import cls from './FilmHeader.module.scss';

interface FilmHeaderProps {
  className?: string;
}

const FilmHeader: FC<FilmHeaderProps> = (props) => {
  const { className } = props;

  const filmData = useSelector(getFilm);
  const {
    ratingKinopoisk,
    nameRu,
    nameEn,
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

    <PageHeaderInfo
      className={cls.FilmHeader}
      src={posterUrl}
      alt={`Обложка произведения ${nameRu || nameEn || nameOriginal}`}
      name={nameRu}
      subName={nameEn || nameOriginal}
      coverUrl={coverUrl}
    >

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
          className={cls.tagsListWrapper}
          isVerticalCentered={false}
          isVisible={genresList?.length !== 0}
          name="Жанры"
        >
          <TagsList className={cls.tagsList} list={genresList} />
        </InfoListItem>

        <InfoListItem
          className={cls.tagsListWrapper}
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
          <Rating rating={ratingKinopoisk} />
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
    </PageHeaderInfo>
  );
};

export default FilmHeader;
