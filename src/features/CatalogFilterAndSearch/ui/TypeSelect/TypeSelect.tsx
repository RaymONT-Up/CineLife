import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogTypeOptionDefault, CatalogTypeOptions, catalogTypeTypes } from 'shared/api/kinopoisk/models';
import { useDispatch } from 'react-redux';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';

interface TypeSelectProps {
  className?: string;
}

const catalogTypeSelectOptions: ISelectOption[] = Object.entries(CatalogTypeOptions).map(([value, label]) => ({
  value,
  label,
}));

const defaultValue = catalogTypeSelectOptions.find((item) => item.value === CatalogTypeOptionDefault);

const TypeSelect: FC<TypeSelectProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const onChange = (newValue: catalogTypeTypes) => {
    dispatch(CatalogFilterAndSearchActions.setType(newValue));
  };

  return (
    <MySelect
      options={catalogTypeSelectOptions}
      name="Тип произведения"
      defaultValue={defaultValue}
      className={classNames('', {}, [className])}
      onChange={onChange}
    />
  );
};

export default TypeSelect;
