import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  CLASSIC = 'classic',
  BUTTON = 'button',
  CLEAR = 'clear',
  NAV_LINK = 'nav_link'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    to,
    className = '',
    theme = AppLinkTheme.CLEAR,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
