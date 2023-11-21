import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Title.module.scss';

export enum TitleTheme {
  hero = 'hero',
  subtitle = 'subtitle',
}
export enum TitleColor {
  primary = 'primary',
  default = 'default',
}
export enum TitleTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  div = 'div',
  p = 'p',
}

interface TitleProps {
  Tag: TitleTags;
  children: ReactNode;

  color?: TitleColor;
  theme?: TitleTheme;
  className?: string;
  centered?: boolean;
}

const Title: FC<TitleProps> = (props) => {
  const {
    className,
    children,
    centered = false,
    Tag = TitleTags.div,
    theme = TitleTheme.hero,
    color = TitleColor.default,
  } = props;

  return (
    <Tag
      className={classNames(cls.Title, { [cls.centered]: centered }, [
        className,
        cls[theme],
        cls[color],
      ])}
    >
      {children}
    </Tag>
  );
};

export default Title;
