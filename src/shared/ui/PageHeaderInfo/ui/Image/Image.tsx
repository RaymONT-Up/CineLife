import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Image.module.scss';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image: FC<ImageProps> = (props) => {
  const {
    className,
    src,
    alt,
  } = props;

  return (
    <div className={cls.wrapper}>
      <div
        className={classNames(cls.img_wrapper, {}, [className])}
      >
        <img
          className={cls.img}
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default Image;
