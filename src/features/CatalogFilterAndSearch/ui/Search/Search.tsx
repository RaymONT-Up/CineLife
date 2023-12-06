import {
  FC, FormEvent, useEffect, useState,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import SearchForm from 'shared/ui/SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import updateUrlParam from 'shared/lib/urlParams/updateUrlParam';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import { getKeywordState } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';

interface SearchProps {
  className?: string;
}

const Search: FC<SearchProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();
  const keywordDefaultValue = useSelector(getKeywordState);
  const [inputValue, setInputValue] = useState<string>(keywordDefaultValue);

  const debouncedOnChange = useDebounce((str: string) => {
    // when dispatch changes useEffect inside catalogPage, which sends a request to the server to receive items

    // set search param
    updateUrlParam(catalogURLParams.keyword, str);

    dispatch(CatalogFilterAndSearchActions.setKeyword(str));
  }, 2500);

  const onChange = (str: string) => {
    // set Input value
    setInputValue(str);
    //  set catalogFilter search value
    debouncedOnChange(str);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SearchForm
      className={classNames(className)}
      value={inputValue}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Search;
