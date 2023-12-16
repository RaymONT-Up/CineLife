import { FC, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { PersonFilmTypes } from 'shared/api/kinopoisk/models';
import Title, { TitleTheme } from 'shared/ui/Title';
import Button from 'shared/ui/Button';
import groupByKey from 'shared/lib/groupByKey/groupByKey';
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
      <Title className={cls.title} theme={TitleTheme.subtitle}>
        фильмы не найдены
      </Title>
    );
  }

  const groupedItems = groupByKey(films, 'professionKey');

  return (
    <div>
      <Title className={cls.title} theme={TitleTheme.subtitle}>
        Фильмография
        <span>{`(${length})`}</span>
      </Title>
      {Object.entries(groupedItems).map(([title, items], index) => (
        <PersonFilmsList
          key={index}
          title={title}
          items={items}
        />
      ))}
    </div>
  );
};

export default PersonFilms;
