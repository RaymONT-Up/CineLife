import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { FilmList } from 'shared/api/kinopoisk/models';
import Title from 'shared/ui/Title';
import FilmPreviewCard from 'entities/FilmPreviewCard/ui/FilmPreviewCard';
import cls from './CatalogList.module.scss';

interface CatalogListProps {
  className?: string;
  items: FilmList,
}

const CatalogList: FC<CatalogListProps> = (props) => {
  const { className, items } = props;

  if (items.length < 1) {
    return (
      <Title centered>
        Ничего не найдено
      </Title>
    );
  }

  return (
    <ul className={classNames(cls.CatalogList, {}, [className])}>
      {items.map((item, index) => (
        <FilmPreviewCard
          key={item.kinoposikId || index}
          kinoposikId={item.kinoposikId}
          ratingKinopoisk={item.ratingKinopoisk}
          nameRu={item.nameRu}
          posterUrl={item.posterUrl}
          year={item.year}
        />
      ))}
    </ul>
  );
};

export default CatalogList;
