import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogTypeOptions, catalogTypeTypes } from 'shared/api/kinopoisk/models';
import { useDispatch, useSelector } from 'react-redux';
import {
  CatalogFilterAndSearchActions,
  catalogDefaultType,
} from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
import updateUrlParam from 'shared/lib/urlParams/updateUrlParam';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import { getTypeState } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import { findValueOption } from 'shared/ui/Select';

interface TypeSelectProps {
  className?: string;
}

const catalogTypeSelectOptions: ISelectOption[] = Object.entries(CatalogTypeOptions).map(([value, label]) => ({
  value,
  label,
}));

const TypeSelect: FC<TypeSelectProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const type = useSelector(getTypeState);

  const defaultValue = findValueOption(catalogTypeSelectOptions, type)
  || findValueOption(catalogTypeSelectOptions, catalogDefaultType);

  const onChange = (newValue: catalogTypeTypes) => {
    // set param
    updateUrlParam(catalogURLParams.type, `${newValue}`);

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
