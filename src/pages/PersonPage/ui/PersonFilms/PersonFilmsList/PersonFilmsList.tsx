import { FC, useState } from 'react';
import ListGrid from 'shared/ui/ListGrid';
import { PersonFilmTypes } from 'shared/api/kinopoisk/models';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import Button from 'shared/ui/Button';
import cls from './PersonFilmsList.module.scss';
import PersonFilm from './PersonFilm/PersonFilm';

interface PersonFilmsListProps {
  className?: string;
  items: PersonFilmTypes[];
  title: string;
}

const PersonFilmsList: FC<PersonFilmsListProps> = (props) => {
  const { className, items, title } = props;

  const [itemsToShow, setItemsToShow] = useState(10);

  const showMore = () => {
    setItemsToShow((prev) => prev + 20);
  };

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
        {items.slice(0, itemsToShow).map((film, index) => (
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

      {itemsToShow < items.length && (
      <Button
        centered
        className={cls.showMore}
        onClick={showMore}
      >
        Показать еще (
        {`${itemsToShow} / ${total}`}
        )
      </Button>
      )}
    </div>
  );
};

export default PersonFilmsList;
