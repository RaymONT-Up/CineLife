import {
  FC, useEffect,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Tabs from 'shared/ui/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import cls from './FilmTabs.module.scss';
import Budget from './Budget/Budget';
import { getIsLoading } from '../model/selectors/FilmTabsSelectors';
import Images from './Images/Images';
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
    { content: <Images id={id} />, name: 'Изображения', id: 2 },
    { content: 'Видео', name: 'Видео', id: 3 },
    { content: <Budget id={id} />, name: 'Бюджет', id: 4 },
    { content: 'Награды', name: 'Награды', id: 5 },
    { content: 'Факты', name: 'Факты', id: 6 },
  ];

  useEffect(() => {
    console.log('render');

    return () => {
      console.log('delete');

      dispatch(FilmTabsAction.reset());
    };
  }, [dispatch]); // Make sure to include dispatch as a dependency

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
