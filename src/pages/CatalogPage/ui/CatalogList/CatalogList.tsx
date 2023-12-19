import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { CatalogList as CatalogListTypes } from 'shared/api/kinopoisk/models';
import Title from 'shared/ui/Title';
import { CatalogPreviewCard } from 'entities/CatalogPreviewCard';
import PageLoader from 'widgets/PageLoader';
import ListGrid from 'shared/ui/ListGrid';
import cls from './CatalogList.module.scss';

interface CatalogListProps {
  className?: string;
  error?: string;
  items: CatalogListTypes;
  isLoading: boolean;
  // loadingMore: boolean;
}

const CatalogList: FC<CatalogListProps> = (props) => {
  const {
    className,
    items,
    isLoading = false,
    // loadingMore = false,
    error = '',
  } = props;

  if (error) {
    return <div>{error}</div>;
  }

  // if (isLoading) {
  //   return <PageLoader />;
  // }

  if (items.length < 1) {
    return (
      <Title centered>
        Ничего не найдено
      </Title>
    );
  }

  return (
    <>
      <ListGrid className={classNames(cls.CatalogList, {}, [className])}>
        {items.map((item, index) => (
          <CatalogPreviewCard
            genres={item.genres}
            countries={item.countries}
            key={item.kinopoiskId || index}
            kinopoiskId={item.kinopoiskId}
            ratingKinopoisk={item.ratingKinopoisk}
            nameRu={item.nameRu}
            posterUrl={item.posterUrl}
            posterUrlPreview={item.posterUrlPreview}
            year={item.year}
          />
        ))}
      </ListGrid>
    </>
  );
};

export default CatalogList;
