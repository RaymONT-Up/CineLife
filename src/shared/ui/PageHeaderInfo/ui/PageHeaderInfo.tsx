import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './PageHeaderInfo.module.scss';

interface PageHeaderInfoProps {
  className?: string;
}

const PageHeaderInfo: FC<PageHeaderInfoProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.PageHeaderInfo, {}, [className])} />
  );
};

export default PageHeaderInfo;
