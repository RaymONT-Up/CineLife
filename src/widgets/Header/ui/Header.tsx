import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/ui/AppLink';
import Logo from 'shared/ui/Logo';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <header className={classNames(cls.Header, {}, [className, 'container'])}>

      <Logo className={cls.Logo} />

      <ul className={cls.list}>
        <li className={cls.item}>
          <AppLink to={RoutePath.about}>О проекте</AppLink>
        </li>
        <li className={cls.item}>
          <AppLink className={cls.link} to={RoutePath.main}>
            Главная
          </AppLink>
        </li>
      </ul>

    </header>
  );
};

export default Header;
