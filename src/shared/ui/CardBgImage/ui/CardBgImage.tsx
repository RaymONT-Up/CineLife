import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink';
import cls from './CardBgImage.module.scss';

interface CardBgImageProps {
  className?: string;
  alt: string;
  src: string;
  to: string;

  withOverflow?: boolean;
  children?: ReactNode;
  heightSize?: number;
}

const CardBgImage: FC<CardBgImageProps> = (props) => {
  const {
    className,
    alt = 'Изображение',
    src = '',
    children,
    heightSize = 160,
    to,
    withOverflow = false,
  } = props;

  return (
    <AppLink
      className={
        classNames(cls.CardBgImage, {
          [cls.overflow]: withOverflow,
        }, [className])
      }
      to={to}
    >
      <div
        className={cls.img_wrapper}
        style={{ paddingTop: `${heightSize}$` }}
      >
        <img
          className={cls.img}
          src={src}
          alt={alt}
        />
      </div>

      {children && children}
    </AppLink>
  );
};

export default CardBgImage;
