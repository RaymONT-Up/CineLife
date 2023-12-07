import {
  FC, memo, useEffect, useMemo,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Tabs from 'shared/ui/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getDescription } from 'pages/FilmPage/model/selectors/FilmPageSelectors';
import cls from './FilmTabs.module.scss';
import Budget from './Budget/Budget';
import { getIsLoading } from '../model/selectors/FilmTabsSelectors';
import { FilmTabsAction } from '../model/slice/FilmTabsSlice';

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
  const dispatch = useDispatch();

  // !!!FIX -> optimize redrawing.
  // + If isLoading changes in the parent component, then <Budget> will not change and will remain with the original data isLoading = false

  const TabsList = [
    { content: description, name: 'Описание', id: 1 },
    { content: 'Изображения', name: 'Изображения', id: 2 },
    { content: 'Видео', name: 'Видео', id: 3 },
    { content: <Budget isLoading={isLoading} id={id} />, name: 'Бюджет', id: 4 },
    { content: 'Награды', name: 'Награды', id: 5 },
    { content: 'Факты', name: 'Факты', id: 6 },
  ];

  useEffect(() => () => {
    dispatch(FilmTabsAction.reset());
  });

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
