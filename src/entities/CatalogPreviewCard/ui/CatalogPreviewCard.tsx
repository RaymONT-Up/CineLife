import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { CatalogItem } from 'shared/api/kinopoisk/models';
import AppLink from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CatalogPreviewCard.module.scss';
import ratingScoreCategory from '../lib/ratingScoreCategory';

interface CatalogPreviewCardProps extends CatalogItem{
  className?: string;
}

const CatalogPreviewCard: FC<CatalogPreviewCardProps> = (props) => {
  const {
    className, posterUrl, nameRu, year, ratingKinopoisk, kinopoiskId,
  } = props;

  const ratingCategory = ratingScoreCategory(ratingKinopoisk);

  return (
    <li className={classNames(cls.CatalogPreviewCard, {}, [className])}>
      <AppLink to={`${RoutePath.catalog}/${kinopoiskId}`}>
        <div className={classNames(cls.rating, {}, [cls[ratingCategory]])}>
          {ratingKinopoisk}
        </div>
        <img className={cls.img} src={posterUrl} alt={`Постер для фильма ${nameRu}`} />
        <div className={cls.info}>
          <h6 className={cls.name}>
            {nameRu}
          </h6>
          <div className={cls.year}>{year}</div>
        </div>
      </AppLink>
    </li>
  );
};

export default CatalogPreviewCard;
