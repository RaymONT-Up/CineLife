import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { CatalogItem } from 'shared/api/kinopoisk/models';
import AppLink from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Rating from 'shared/ui/Rating';
import cls from './CatalogPreviewCard.module.scss';
import TagsList, { TagsListTheme } from './TagsList/TagsList';

interface CatalogPreviewCardProps extends CatalogItem{
  className?: string;
}

const isWideScreen = window.innerWidth > 3840;

const CatalogPreviewCard: FC<CatalogPreviewCardProps> = (props) => {
  const {
    className,
    posterUrl,
    posterUrlPreview,
    nameRu,
    year,
    ratingKinopoisk,
    kinopoiskId,
    genres,
    countries,
  } = props;

  const genresList = genres.map((item) => item.genre);
  const countriesList = countries.map((item) => item.country);

  return (
    <li>
      <AppLink className={classNames(cls.CatalogPreviewCard, {}, [className])} to={`${RoutePath.catalog}/${kinopoiskId}`}>

        <Rating className={cls.rating} rating={ratingKinopoisk} />

        <div className={cls.imgWrapper}>
          <img
            className={cls.img}
            src={isWideScreen ? posterUrl : posterUrlPreview}
            alt={`Постер для фильма ${nameRu}`}
          />
        </div>

        <div className={cls.info}>
          <TagsList list={genresList} />
          <TagsList list={countriesList} theme={TagsListTheme.outline} />

          <h6 className={cls.name}>
            {nameRu}
          </h6>
          <span className={cls.year}>{year}</span>
        </div>
      </AppLink>
    </li>
  );
};

export default CatalogPreviewCard;
