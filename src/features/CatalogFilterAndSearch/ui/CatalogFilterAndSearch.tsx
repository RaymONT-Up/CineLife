import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import SearchForm from 'shared/ui/SearchForm';
import cls from './CatalogFilterAndSearch.module.scss';
import SortSelect from './SortSelect/SortSelect';
import TypeSelect from './TypeSelect/TypeSelect';
import GenresSelect from './GenresSelect/GenresSelect';

interface CatalogFilterAndSearchProps {
  className?: string;
}

const CatalogFilterAndSearch: FC<CatalogFilterAndSearchProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.CatalogFilterAndSearch, {}, [className])}>
      <GenresSelect className={cls.genres} />
      <TypeSelect className={cls.type} />

      <SortSelect className={cls.sort} />

    </div>
  );
};

export default CatalogFilterAndSearch;
