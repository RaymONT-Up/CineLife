import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './CoverBg.module.scss';

interface CoverBgProps {
  className?: string;
}

const CoverBg: FC<CoverBgProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.CoverBg, {}, [className])} />
  );
};

export default CoverBg;
