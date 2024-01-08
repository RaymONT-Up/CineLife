import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Tabs from 'shared/ui/Tabs';
import { FavoritesStatus } from 'features/favorites';
import cls from './Favorites.module.scss';
import FavoritesList from './FavoritesList/FavoritesList';

interface FavoritesProps {
  className?: string;
}

const tabsList = Object.entries(FavoritesStatus).map((item, index) => ({
  name: item[1],
  content: <FavoritesList key={index} status={item[1]} />,
  id: index,
}));

// !FIX - добавить отображение загрузки
const Favorites: FC<FavoritesProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Favorites, {}, [className])}>
      <Tabs
        TabsList={tabsList}
      />
    </div>
  );
};

export default Favorites;
