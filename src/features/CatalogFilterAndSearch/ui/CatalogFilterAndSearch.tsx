import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import SearchForm from 'shared/ui/SearchForm';
import MySelect from 'shared/ui/Select/ui/MySelect';
import cls from './CatalogFilterAndSearch.module.scss';

interface CatalogFilterAndSearchProps {
  className?: string;
}

const CatalogFilterAndSearch: FC<CatalogFilterAndSearchProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.CatalogFilterAndSearch, {}, [className])}>
      <MySelect />
    </div>
  );
};

export default CatalogFilterAndSearch;
