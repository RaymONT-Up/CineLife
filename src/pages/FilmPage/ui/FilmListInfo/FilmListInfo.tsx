import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { catalogTypeTypes } from 'shared/api/kinopoisk/models';
import Title, { TitleTags, TitleTheme } from 'shared/ui/Title';
import cls from './FilmInfo.module.scss';
import FilmListItem from './FilmListItem/FilmListItem';

interface FilmInfoProps {
  className?: string;
  nameRu: string;
  year: number;
  slogan: string;
  genres: string[];
  completed: boolean;
  type: catalogTypeTypes;
  filmLength: number;
}

const FilmInfo: FC<FilmInfoProps> = (props) => {
  const {
    className,
    nameRu,
    year,
    slogan,
    genres,
    completed,
    type,
    filmLength,

  } = props;
  return (
    <div className={cls.FilmInfo}>
      <Title
        className={cls.title}
        theme={TitleTheme.hero}
        Tag={TitleTags.h1}
      >
        {nameRu}
      </Title>

      ul

    </div>
  );
};

export default FilmInfo;
