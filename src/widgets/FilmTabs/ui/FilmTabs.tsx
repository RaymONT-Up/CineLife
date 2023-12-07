import { FC, memo, useMemo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Tabs from 'shared/ui/Tabs';
import { useSelector } from 'react-redux';
import { getDescription } from 'pages/FilmPage/model/selectors/FilmPageSelectors';
import cls from './FilmTabs.module.scss';
import Budget from './Budget/Budget';
import { getIsLoading } from '../model/selectors/FilmTabsSelectors';

interface FilmTabsProps {
  className?: string;
  description: string;
  id: number;
}

const FilmTabs: FC<FilmTabsProps> = (props) => {
  const {
    className,
    description = 'Описание фильма не найдено',
    id,
  } = props;

  const isLoading = useSelector(getIsLoading);

  const TabsList = [
    { content: description, name: 'Описание', id: 1 },
    { content: 'Изображения', name: 'Изображения', id: 2 },
    { content: 'Видео', name: 'Видео', id: 3 },
    { content: <Budget isLoading={isLoading} id={id} />, name: 'Бюджет', id: 4 },
    { content: 'Награды', name: 'Награды', id: 5 },
    { content: 'Факты', name: 'Факты', id: 6 },
  ];

  return (
    <div className={classNames(cls.FilmTabs, {}, [className])}>
      <Tabs
        buttonClass={cls.button}
        buttonsClass={cls.buttons}
        activeClass={cls.active}
        TabsList={TabsList}
        isLoading={isLoading}
      />
    </div>
  );
};

export default FilmTabs;
