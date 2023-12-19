import { FC, useCallback, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCatalogError,
  getCatalogIsLoading,
  getCatalogItems,
  getCatalogPage,
  getCatalogTotalPages,
} from 'pages/CatalogPage/model/selectors/CatalogPageSelectors';
import CatalogFilterAndSearch, { getCatalogFilterParams } from 'features/CatalogFilterAndSearch';
import { catalogActions } from 'pages/CatalogPage/model/slice/catalogPageSlice';
import { getURLParamsIsInstalled } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import useObserverApi from 'shared/lib/hooks/useObserverApi/useObserverApi';
import Loader from 'shared/ui/Loader';
import cls from './Catalog.module.scss';
import CatalogList from '../CatalogList/CatalogList';
import { FetchCatalog } from '../../model/service/FetchCatalog';

interface CatalogProps {
  className?: string;
}

const CatalogPage: FC<CatalogProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();

  const isLoading = useSelector(getCatalogIsLoading);
  const error = useSelector(getCatalogError);
  const items = useSelector(getCatalogItems);
  const params = useSelector(getCatalogFilterParams);
  const paramsIsInstalled = useSelector(getURLParamsIsInstalled);
  const page = useSelector(getCatalogPage);
  const totalPages = useSelector(getCatalogTotalPages);

  const hasMore = totalPages - page >= 1;

  // Callback for loading the next page.
  const loadMoreCallback = useCallback(() => {
    if (!isLoading && hasMore) {
      dispatch(catalogActions.setPage(page + 1));
    }
  }, [dispatch, isLoading, hasMore, page]);

  // when page was changed
  useEffect(() => {
    if (page > 1) {
      console.log('set new page', page, params);
      dispatch(FetchCatalog({ params: { ...params, page }, loadMore: true }) as any);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, dispatch]);

  useEffect(() => {
    dispatch(catalogActions.reset());
  }, [params, dispatch]);

  // init load
  useEffect(() => {
    if (paramsIsInstalled) {
      dispatch(FetchCatalog({ params: { ...params, page: 1 } }) as any);
    }

    return () => {
      dispatch(catalogActions.reset());
    };
  }, [params, dispatch, paramsIsInstalled]);

  const { targetRef } = useObserverApi(loadMoreCallback);

  return (
    <div className={classNames(cls.Catalog, {}, [className])}>
      <CatalogFilterAndSearch isLoading={isLoading} />
      <CatalogList isLoading={isLoading} error={error} items={items} />
      <div ref={targetRef} className={cls.loadMore}>
        Показать еще
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default CatalogPage;
