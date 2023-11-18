import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Title.module.scss';

export enum TitleTheme {
  hero = 'hero',
  subtitle = 'subtitle',
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
  } = props;

  return (
    <Tag
      className={classNames(cls.Title, { [cls.centered]: centered }, [
        className,
        cls[theme],
      ])}
    >
      {children}
    </Tag>
  );
};

export default Title;
