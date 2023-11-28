import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect, { ISelectOption } from 'shared/ui/Select/ui/MySelect';
import { CatalogTypeOption } from 'shared/api/kinopoisk/models';
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
  return (
    <MySelect
      options={catalogTypeSelectOptions}
      name="Сортировка для каталога"
      className={classNames('', {}, [className])}
    />
  );
};

export default TypeSelect;
