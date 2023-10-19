import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import LogoSvg from 'shared/assets/icons/logo.svg';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import cls from './Logo.module.scss';
import AppLink, { AppLinkTheme } from '../../AppLink/ui/AppLink';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = (props) => {
  const { className } = props;
  return (
    <AppLink theme={AppLinkTheme.CLEAR} className={classNames(cls.Logo, {}, [className])} to={AppRoutes.MAIN}>
      <LogoSvg />
    </AppLink>
  );
};

export default Logo;
