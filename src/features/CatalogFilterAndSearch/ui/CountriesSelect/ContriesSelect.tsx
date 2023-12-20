import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect from 'shared/ui/Select/ui/MySelect';
import { useDispatch, useSelector } from 'react-redux';
import { CatalogFilterAndSearchActions } from 'features/CatalogFilterAndSearch/model/slice/CatalogFilterAndSearchSlice';
import updateUrlParam from 'shared/lib/urlParams/updateUrlParam';
import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import findValueOption from 'features/CatalogFilterAndSearch/lib/findValueOption';
import { getCountriesState } from 'features/CatalogFilterAndSearch/model/selectors/getCatalogFilter';
import { catalogCountriesSelectOptions } from 'shared/config/catalogFilter/catalogFilter';

interface CountriesSelectProps {
  className?: string;
}

const CountriesSelect: FC<CountriesSelectProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const Countries = useSelector(getCountriesState);
  const country: number = Countries && Countries[0];
  const defaultValue = findValueOption(catalogCountriesSelectOptions, country, { value: '', label: 'Все страны' });

  const onChange = (newValue: number) => {
    // set param
    updateUrlParam(catalogURLParams.country, `${newValue}`);

    dispatch(CatalogFilterAndSearchActions.setCountries([newValue]));
  };

  return (
    <MySelect
      options={catalogCountriesSelectOptions}
      name="Страны"
      defaultValue={defaultValue}
      className={classNames('', {}, [className])}
      onChange={onChange}
      isSearchable
    />
  );
};

export default CountriesSelect;
