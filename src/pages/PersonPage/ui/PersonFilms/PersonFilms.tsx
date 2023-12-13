import { FC, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { PersonFilmTypes } from 'shared/api/kinopoisk/models';
import Title, { TitleTheme } from 'shared/ui/Title';
import Button from 'shared/ui/Button';
import cls from './PersonFilms.module.scss';
import PersonFilm from './PersonFilm/PersonFilm';

interface PersonFilmsProps {
  className?: string;
  films: PersonFilmTypes[];
}

const PersonFilms: FC<PersonFilmsProps> = (props) => {
  const { className, films } = props;

  const [filmsToShow, setFilmsToShow] = useState(10);

  const length = films?.length;

  const showMoreFilms = () => {
    setFilmsToShow(filmsToShow + 10);
  };

  if (length === 0 || !films) {
    return (
      <Title className={cls.title} theme={TitleTheme.subtitle}>
        фильмы не найдены
      </Title>
    );
  }

  return (
    <div>
      <Title className={cls.title} theme={TitleTheme.subtitle}>
        Фильмография
        {' '}
        <span>{`(${length})`}</span>
      </Title>

      <ul className={classNames(cls.list, {}, [className])}>
        {films?.slice(0, filmsToShow).map((film, index) => (
          <PersonFilm
            filmId={film.filmId}
            nameRu={film.nameRu}
            nameEn={film.nameEn}
            rating={film.rating}
            description={film.description}
            general={film.general}
            professionKey={film.professionKey}
            key={`${film.filmId}${index}`}
          />
        ))}
      </ul>

      {length > filmsToShow && (
        <Button centered onClick={showMoreFilms}>
          Показать еще
          {' '}
          {`${filmsToShow} / ${length}`}
        </Button>
      )}
    </div>
  );
};

export default PersonFilms;
