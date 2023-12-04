import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Tabs from 'shared/ui/Tabs';
import { useSelector } from 'react-redux';
import { getDescription } from 'pages/FilmPage/model/selectors/FilmPageSelectors';
import cls from './FilmTabs.module.scss';

interface FilmTabsProps {
  className?: string;
}

const FilmTabs: FC<FilmTabsProps> = (props) => {
  const { className } = props;

  const description = useSelector(getDescription);

  const TabsList = [
    { content: description, name: 'Описание', id: 1 },
    { content: 'Изображения', name: 'Изображения', id: 2 },
    { content: 'Видео', name: 'Видео', id: 3 },
    { content: 'Бюджет', name: 'Бюджет', id: 4 },
    { content: 'Награды', name: 'Награды', id: 5 },
    { content: 'Факты', name: 'Факты', id: 5 },
  ];

  return (
    <div className={classNames(cls.FilmTabs, {}, [className])}>
      <Tabs TabsList={TabsList} />
    </div>
  );
};

export default FilmTabs;
