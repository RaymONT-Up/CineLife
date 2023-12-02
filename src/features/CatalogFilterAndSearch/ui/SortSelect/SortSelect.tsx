import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogOrderOptionDefault, CatalogOrderOptions, catalogOrderTypes } from 'shared/api/kinopoisk/models';
import { useDispatch } from 'react-redux';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
import { useParams, useSearchParams } from 'react-router-dom';

interface SortSelectProps {
  className?: string;
}

const catalogSortSelectOptions: ISelectOption[] = Object.entries(CatalogOrderOptions).map(([value, label]) => ({
  value,
  label,
}));

const defaultValue = catalogSortSelectOptions.find((item) => item.value === CatalogOrderOptionDefault);

const SortSelect: FC<SortSelectProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (newValue: catalogOrderTypes) => {
    dispatch(CatalogFilterAndSearchActions.setOrder(newValue));
  };

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
