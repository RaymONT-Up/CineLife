import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogTypeOption, catalogTypeTypes } from 'shared/api/kinopoisk/models';
import { useDispatch, useSelector } from 'react-redux';
import { getSortState } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
// import cls from './TypeSelect.module.scss';

interface TypeSelectProps {
  className?: string;
}

const catalogTypeSelectOptions: ISelectOption[] = Object.entries(CatalogTypeOption).map(([value, label]) => ({
  value,
  label,
}));

const TypeSelect: FC<TypeSelectProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();
  const select = useSelector(getSortState);

  const onChange = (newValue: catalogTypeTypes) => {
    dispatch(CatalogFilterAndSearchActions.setType(newValue));
  };

  return (
    <MySelect
      options={catalogTypeSelectOptions}
      name="Тип произведения"
      className={classNames('', {}, [className])}
      onChange={onChange}
    />
  );
};

export default TypeSelect;
