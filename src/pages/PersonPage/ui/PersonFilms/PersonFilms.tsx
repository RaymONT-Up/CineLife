import { FC } from 'react';
import { PersonFilmTypes, TeamProfession } from 'shared/api/kinopoisk/models';
import Title, { TitleTheme } from 'shared/ui/Title';
import groupByKey from 'shared/lib/groupByKey/groupByKey';
import getEnumValueByKey from 'shared/lib/getEnumValueByKey/getEnumValueByKey';
import cls from './PersonFilms.module.scss';
import PersonFilmsList from './PersonFilmsList/PersonFilmsList';

interface PersonFilmsProps {
  className?: string;
  films: PersonFilmTypes[];
}
// !FIX --- decompose and refactor.
// the Person page has the same TeamList component.

const PersonFilms: FC<PersonFilmsProps> = (props) => {
  const { className, films } = props;

  const length = films?.length;

  if (length === 0 || !films) {
    return (
      <div className={cls.PersonFilms}>
        <Title theme={TitleTheme.subtitle}>
          Информация о фильмах не найдена
        </Title>
      </div>

    );
  }

  const groupedItems = groupByKey(films, 'professionKey');

  return (
    <div className={cls.PersonFilms}>
      <Title className={cls.title} theme={TitleTheme.subtitle}>
        Фильмография
        <span>{`(${length})`}</span>
      </Title>
      {Object.entries(groupedItems).map(([title, items], index) => (
        <PersonFilmsList
          key={`${title}${index}`}
          title={getEnumValueByKey(TeamProfession, title as any, title)}
          items={items}
        />
      ))}
    </div>
  );
};

export default PersonFilms;
