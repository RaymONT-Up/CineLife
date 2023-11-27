import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import MySelect from 'shared/ui/Select/ui/MySelect';
import cls from './CatalogFilter.module.scss';

interface CatalogFilterProps {
  className?: string;
}

// **FIX: Декомпозировать в features/entities
const CatalogFilter: FC<CatalogFilterProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.CatalogFilter, {}, [className])}>
      <MySelect />
    </div>
  );
};

export default CatalogFilter;
