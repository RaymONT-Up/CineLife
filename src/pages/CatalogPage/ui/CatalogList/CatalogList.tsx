import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { CatalogList as CatalogListTypes } from 'shared/api/kinopoisk/models';
import Title from 'shared/ui/Title';
import { CatalogPreviewCard } from 'entities/CatalogPreviewCard';
import cls from './CatalogList.module.scss';

interface CatalogListProps {
  className?: string;
  items: CatalogListTypes,
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
        <CatalogPreviewCard
          key={item.kinopoiskId || index}
          kinopoiskId={item.kinopoiskId}
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
