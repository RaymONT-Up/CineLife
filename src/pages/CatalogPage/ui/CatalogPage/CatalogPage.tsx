import {
  FC, useCallback, useEffect,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCatalogError, getCatalogIsLoading, getCatalogItems, getCatalogPage, getCatalogTotalPages, getLoadMore,
} from 'pages/CatalogPage/model/selectors/CatalogPageSelectors';
import CatalogFilterAndSearch, { getCatalogFilterParams } from 'features/CatalogFilterAndSearch';
import { catalogActions } from 'pages/CatalogPage/model/slice/catalogPageSlice';
import { getURLParamsIsInstalled } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import cls from './Catalog.module.scss';
import CatalogList from '../CatalogList/CatalogList';
import { FetchCatalog } from '../../model/service/FetchCatalog';

interface CatalogProps {
  className?: string;
}
// !FIX !!!!!! be sure to refactor
const CatalogPage: FC<CatalogProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();

  const isLoading = useSelector(getCatalogIsLoading);
  const error = useSelector(getCatalogError);

  const items = useSelector(getCatalogItems);
  const params = useSelector(getCatalogFilterParams);
  const paramsIsInstalled = useSelector(getURLParamsIsInstalled);

  const page = useSelector(getCatalogPage);
  const loadMore = useSelector(getLoadMore);

  const totalPages = useSelector(getCatalogTotalPages);
  const hasMore = totalPages - page >= 1;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const scrollHandler = (e: any) => {
  //   const { scrollHeight } = e.target.documentElement;
  //   const { scrollTop } = e.target.documentElement;
  //   const { innerHeight } = window;

  //   if (
  //     scrollHeight - (scrollTop + innerHeight) < 50
  //     && hasMore
  //     && isLoading === false
  //   ) {
  //     dispatch(catalogActions.setLoadMore(true));
  //     dispatch(catalogActions.setPage(page + 1));
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);

  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, [scrollHandler]);

  // useEffect(() => {
  //   dispatch(catalogActions.setLoadMore(false));
  //   dispatch(catalogActions.setPage(1));
  // }, [params, dispatch]);

  // init load data
  useEffect(() => {
    if (paramsIsInstalled) {
      dispatch(FetchCatalog({ ...params, page }) as any);
    }
  }, [params, page, dispatch, paramsIsInstalled]);

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CatalogFilterAndSearch isLoading={isLoading} />
      <CatalogList isLoading={isLoading} error={error} items={items} loadMore={loadMore} />
      {/* {!hasMore && 'The end'} */}
    </div>
  );
};

export default CatalogPage;
