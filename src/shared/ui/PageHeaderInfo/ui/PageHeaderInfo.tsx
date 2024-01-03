import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './PageHeaderInfo.module.scss';
import Info from './Info/Info';
import Image from './Image/Image';

interface PageHeaderInfoProps {
  className?: string;
  coverClassName?: string;
  src: string;
  alt: string;
  children: ReactNode;
  name: string;
  subName?: string;
  coverUrl?: string;
}

const PageHeaderInfo: FC<PageHeaderInfoProps> = (props) => {
  const {
    className,
    src,
    alt,
    children,
    name,
    subName,
    coverUrl,
    coverClassName,
  } = props;

  return (
    <div className={classNames(cls.PageHeaderInfo, {}, [className])}>

      {coverUrl && (
      <div
        className={classNames(cls.coverBg, {}, [coverClassName])}
        style={{ backgroundImage: `url(${coverUrl})` }}
      />
      )}

      <div className={cls.content}>

        <Image
          src={src}
          alt={alt}
        />

        <Info name={name} subName={subName}>
          {children}
        </Info>
      </div>

    </div>
  );
};

export default PageHeaderInfo;
