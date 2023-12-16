import { FC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink';
import Rating from 'shared/ui/Rating';
import { PersonFilmTypes } from 'shared/api/kinopoisk/models';
import cls from './PersonFilm.module.scss';

interface PersonFilmProps extends PersonFilmTypes{
  className?: string;
}

const PersonFilm: FC<PersonFilmProps> = (props) => {
  const {
    className,
    filmId,
    nameRu,
    nameEn,
    professionKey,
    rating,
    description,
  } = props;

  const name = nameRu || nameEn;

  return (
    <li>
      <AppLink
        className={cls.PersonFilm}
        to={`${RoutePath.catalog}/${filmId}`}
      >
        <Rating className={cls.rating} rating={rating} />
        <div className={cls.img_wrapper}>
          <img
            className={cls.img}
            src={`https://kinopoiskapiunofficial.tech/images/posters/kp_small/${filmId}.jpg`}
            alt={`Постер ${name}`}
          />
        </div>
        <div className={cls.info}>
          <h6>
            {name}
          </h6>
          <h6 className={cls.description}>
            {description}
          </h6>
        </div>
      </AppLink>
    </li>
  );
};

export default PersonFilm;
