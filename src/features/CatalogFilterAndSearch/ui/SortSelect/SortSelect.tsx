import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogOrderOptions, catalogOrderTypes } from 'shared/api/kinopoisk/models';
import { useDispatch, useSelector } from 'react-redux';
import {
  CatalogFilterAndSearchActions, catalogDefaultOrder,
} from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
import updateUrlParam from 'shared/lib/urlParams/updateUrlParam';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import { getSortState } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import { findValueOption } from 'shared/ui/Select';

interface SortSelectProps {
  className?: string;
}

const catalogSortSelectOptions: ISelectOption[] = Object.entries(CatalogOrderOptions).map(([value, label]) => ({
  value,
  label,
}));

const SortSelect: FC<SortSelectProps> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();

  const sort = useSelector(getSortState);

  const onChange = (newValue: catalogOrderTypes) => {
    updateUrlParam(catalogURLParams.order, `${newValue}`);
    dispatch(CatalogFilterAndSearchActions.setOrder(newValue));
  };

  const defaultValue = findValueOption(catalogSortSelectOptions, sort)
  || findValueOption(catalogSortSelectOptions, catalogDefaultOrder);
  return (
    <MySelect
      options={catalogSortSelectOptions}
      name="Сортировка"
      defaultValue={defaultValue}
      className={classNames('', {}, [className])}
      onChange={onChange}
    />
  );
};

export default SortSelect;
