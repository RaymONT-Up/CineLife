import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import LogoIcon from 'shared/assets/icons/bigLogo.svg';
import cls from './Logo.module.scss';
import AppLink, { AppLinkTheme } from '../../AppLink/ui/AppLink';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = (props) => {
  const { className = '' } = props;

  return (
    <AppLink theme={AppLinkTheme.CLEAR} className={classNames(cls.Logo, {}, [className])} to={RoutePath.main}>
      <LogoIcon />
    </AppLink>
  );
};

export default Logo;
