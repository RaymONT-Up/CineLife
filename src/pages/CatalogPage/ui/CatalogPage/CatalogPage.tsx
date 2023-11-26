import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { FetchCatalog } from 'pages/CatalogPage/model/service/FetchCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogItems, getSearch } from 'pages/CatalogPage/model/selectors/CatalogPageSelectors';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import SearchForm from 'features/SearchForm';
import { catalogActions } from 'pages/CatalogPage/model/slice/catalogPageSlice';
import cls from './Catalog.module.scss';
import CatalogList from '../CatalogList/CatalogList';
import CatalogFilter from '../CatalogFilter/CatalogFilter';

interface CatalogProps {
  className?: string;
}

// Декомпозировать все
const Catalog: FC<CatalogProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const items = useSelector(getCatalogItems);
  const searchValue = useSelector(getSearch);

  useEffect(() => {
    dispatch(FetchCatalog() as any);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ваш обработчик с использованием debounceSearchHandler
  const searchHandler = (string: string) => {
    dispatch(catalogActions.setSearch(string));
  };

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CatalogFilter />
      <CatalogList items={items} />
    </div>
  );
};

export default Catalog;
