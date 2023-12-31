import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { CatalogItem } from 'shared/api/kinopoisk/models';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Rating from 'shared/ui/Rating';
import TagsList, { TagsListTheme } from 'shared/ui/TagsList';
import CardBgImage from 'shared/ui/CardBgImage';
import cls from './CatalogPreviewCard.module.scss';

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

  const genresList = genres.map((item) => ({ label: item.genre }));
  const countriesList = countries.map((item) => ({ label: item.country }));

  return (
    <li>
      <CardBgImage
        withOverflow
        className={classNames(cls.CatalogPreviewCard, {}, [className])}
        src={isWideScreen ? posterUrl : posterUrlPreview}
        alt={`Постер для фильма ${nameRu}`}
        to={`${RoutePath.catalog}/${kinopoiskId}`}
      >

        <Rating className={cls.rating} rating={ratingKinopoisk} />

        <div className={cls.info}>
          <TagsList disableHover className={cls.tagList} list={genresList} />
          <TagsList disableHover className={cls.tagList} list={countriesList} theme={TagsListTheme.outline} />

          <h6 className={cls.name}>
            {nameRu}
          </h6>
          <span className={cls.year}>{year}</span>
        </div>
      </CardBgImage>
    </li>
  );
};

export default CatalogPreviewCard;
