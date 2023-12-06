import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'shared/ui/Loader';
import cls from './CatalogFilterAndSearch.module.scss';
import SortSelect from './SortSelect/SortSelect';
import TypeSelect from './TypeSelect/TypeSelect';
import GenresSelect from './GenresSelect/GenresSelect';
import Search from './Search/Search';
import { catalogURLParams } from '../model/types/urlParams';
import { CatalogFilterAndSearchActions } from '../model/slice/CatalogFilterAndSearchSlice';
import { getURLParamsIsInstalled } from '../model/selectors/getCatalogFilter';

interface CatalogFilterAndSearchProps {
  className?: string;
  isLoading: boolean;
}

// !FIX = refactor and decomposition.
// repeating code in select
// + optimisation
const CatalogFilterAndSearch: FC<CatalogFilterAndSearchProps> = (props) => {
  const { className, isLoading } = props;

  const dispatch = useDispatch();

  const ParamsIsInstalled = useSelector(getURLParamsIsInstalled);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const searchParams = new URLSearchParams(location.search);
    const order = searchParams.get(catalogURLParams.order);
    const type = searchParams.get(catalogURLParams.type);
    const genre = searchParams.get(catalogURLParams.genre);
    const country = searchParams.get(catalogURLParams.country);
    const keyword = searchParams.get(catalogURLParams.keyword);

    dispatch(CatalogFilterAndSearchActions.setParams({
      order, type, genre, country, keyword,
    }));

    return () => {
      dispatch(CatalogFilterAndSearchActions.resetCatalogParams());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ParamsIsInstalled) {
    return <Loader />;
  }

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
