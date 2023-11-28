import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogOrderOptions, catalogOrderTypes } from 'shared/api/kinopoisk/models';
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
  return (
    <MySelect
      options={catalogSortSelectOptions}
      name="Сортировка для каталога"
      className={classNames('', {}, [className])}
    />
  );
};

export default SortSelect;
