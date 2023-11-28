import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import SearchForm from 'shared/ui/SearchForm';
import cls from './CatalogFilterAndSearch.module.scss';
import SortSelect from './SortSelect/SortSelect';
import TypeSelect from './TypeSelect/TypeSelect';

interface CatalogFilterAndSearchProps {
  className?: string;
}

const CatalogFilterAndSearch: FC<CatalogFilterAndSearchProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.CatalogFilterAndSearch, {}, [className])}>
      <SortSelect className={cls.sort} />
      <TypeSelect className={cls.type} />
    </div>
  );
};

export default CatalogFilterAndSearch;
