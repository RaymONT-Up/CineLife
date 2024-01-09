import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './CoverBg.module.scss';

interface CoverBgProps {
  className?: string;
  url: string;
}

const CoverBg: FC<CoverBgProps> = (props) => {
  const { className, url } = props;
  return (
    <div
      className={classNames(cls.CoverBg, {}, [className])}
      style={{ backgroundImage: url }}
    />
  );
};

export default CoverBg;
