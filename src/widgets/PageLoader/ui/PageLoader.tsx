import { FC, ReactNode } from 'react';
import Loader from 'shared/ui/Loader';
import classNames from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
  children?: ReactNode;
}

const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className = '', children = <Loader /> } = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      {children}
    </div>
  );
};

export default PageLoader;
