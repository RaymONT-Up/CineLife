import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { FetchCatalog } from 'pages/CatalogPage/model/service/FetchCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogItems } from 'pages/CatalogPage/model/selectors/CatalogPageSelectors';
import CatalogFIlterAndSearch from 'features/CatalogFilterAndSearch/ui/CatalogFilterAndSearch';
import { getCatalogFilterParams } from 'features/CatalogFilterAndSearch';
import cls from './Catalog.module.scss';
import CatalogList from '../CatalogList/CatalogList';

interface CatalogProps {
  className?: string;
}

// Декомпозировать все
const Catalog: FC<CatalogProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const items = useSelector(getCatalogItems);
  const params = useSelector(getCatalogFilterParams);

  useEffect(() => {
    dispatch(FetchCatalog(params) as any);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CatalogFIlterAndSearch />
      <CatalogList items={items} />
    </div>
  );
};

export default Catalog;
