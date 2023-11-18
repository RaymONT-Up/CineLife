import { FC, useEffect, useRef } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Logo from 'shared/ui/Logo';

import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './Header.module.scss';
import Nav from './Nav/Nav';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className = '' } = props;

  return (
    <header className={classNames(cls.Header, {}, [className, 'container'])}>

      <Logo className={cls.Logo} />

      <Nav className={cls.nav} />

      <Button className={cls.loginBtn}>Войти</Button>
      <Button theme={ButtonTheme.OUTLINE}>Зарегистрироваться</Button>

    </header>
  );
};

export default Header;
