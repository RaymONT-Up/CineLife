import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './CatalogFilterAndSearch.module.scss';
import SortSelect from './SortSelect/SortSelect';
import TypeSelect from './TypeSelect/TypeSelect';
import GenresSelect from './GenresSelect/GenresSelect';
import Search from './Search/Search';

interface CatalogFilterAndSearchProps {
  className?: string;
  isLoading: boolean;
}

const CatalogFilterAndSearch: FC<CatalogFilterAndSearchProps> = (props) => {
  const { className, isLoading } = props;

  return (
    <div className={classNames(cls.CatalogFilterAndSearch, { [cls.disabled]: isLoading }, [className])}>
      <div className={cls.top}>
        <Search className={cls.search} />
      </div>

      <div className={cls.bottom}>
        <GenresSelect className={cls.genres} />
        <TypeSelect className={cls.type} />
        <SortSelect className={cls.sort} />
      </div>
    </div>
  );
};

export default CatalogFilterAndSearch;
