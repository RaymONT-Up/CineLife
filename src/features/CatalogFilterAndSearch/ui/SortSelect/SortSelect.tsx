import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogOrderOptions, catalogOrderTypes } from 'shared/api/kinopoisk/models';
import { useDispatch, useSelector } from 'react-redux';
import { getSortState } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
// import cls from './SortSelect.module.scss';

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
  const select = useSelector(getSortState);

  const onChange = (newValue: catalogOrderTypes) => {
    dispatch(CatalogFilterAndSearchActions.setOrder(newValue));
  };

  return (
    <MySelect
      options={catalogSortSelectOptions}
      name="Сортировка"
      className={classNames('', {}, [className])}
      onChange={onChange}
    />
  );
};

export default SortSelect;
