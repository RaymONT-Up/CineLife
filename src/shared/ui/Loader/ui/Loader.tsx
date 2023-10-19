import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export enum LoaderTheme {
    CLASSIC = 'classic',
}

interface LoaderProps {
  className?: string;
  theme?: LoaderTheme
}

const Loader: FC<LoaderProps> = (props) => {
  const { className = '', theme = LoaderTheme.CLASSIC } = props;

  return (
    <div className={classNames(cls[theme], {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
