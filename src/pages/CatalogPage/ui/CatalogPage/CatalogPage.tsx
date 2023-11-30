import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { FetchCatalog } from 'pages/CatalogPage/model/service/FetchCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogIsLoading, getCatalogItems } from 'pages/CatalogPage/model/selectors/CatalogPageSelectors';
import CatalogFIlterAndSearch from 'features/CatalogFilterAndSearch/ui/CatalogFilterAndSearch';
import { getCatalogFilterParams } from 'features/CatalogFilterAndSearch';
import PageLoader from 'widgets/PageLoader';
import cls from './Catalog.module.scss';
import CatalogList from '../CatalogList/CatalogList';

interface CatalogProps {
  className?: string;
}

const Catalog: FC<CatalogProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const isLoading = useSelector(getCatalogIsLoading);
  const items = useSelector(getCatalogItems);
  const params = useSelector(getCatalogFilterParams);

  useEffect(() => {
    dispatch(FetchCatalog(params) as any);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CatalogFIlterAndSearch />
      <CatalogList items={items} />
    </div>
  );
};

export default Catalog;
