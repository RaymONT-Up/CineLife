import { FC } from 'react';
import ListGrid from 'shared/ui/ListGrid';
import { PersonFilmTypes } from 'shared/api/kinopoisk/models';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import ShowMoreButtons from 'shared/ui/ShowMoreButtons';
import useShowMore from 'shared/lib/hooks/useShowMore/useShowMore';
import cls from './PersonFilmsList.module.scss';
import PersonFilm from './PersonFilm/PersonFilm';

interface PersonFilmsListProps {
  className?: string;
  items: PersonFilmTypes[];
  title: string;
}

const PersonFilmsList: FC<PersonFilmsListProps> = (props) => {
  const { className, items, title } = props;

  const {
    visibleItems, hasMore, showMore, reset, canHide,
  } = useShowMore(items);

  const total = items.length;

  return (
    <div className={cls.box}>
      <Title
        Tag={TitleTags.h3}
        className={cls.title}
        theme={TitleTheme.subtitle}
      >
        { title }
        <span>
          { ` (${total})`}
        </span>
      </Title>

      <ListGrid className={cls.list}>
        {visibleItems.map((film, index) => (
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
      </ListGrid>

      <ShowMoreButtons
        hasMore={hasMore}
        canHide={canHide}
        showMore={showMore}
        reset={reset}
      />

    </div>
  );
};

export default PersonFilmsList;
