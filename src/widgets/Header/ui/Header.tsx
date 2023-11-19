import {
  FC, useState,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Logo from 'shared/ui/Logo';

import Button from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Header.module.scss';
import Nav from './Nav/Nav';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className = '' } = props;
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const openLoginModal = () => {
    setLoginIsOpen(true);
  };
  const closeLoginModal = () => {
    setLoginIsOpen(false);
  };

  return (
    <header className={classNames(cls.Header, {}, [className, 'container'])}>

      <Logo className={cls.Logo} />

      <Nav className={cls.nav} />

      <Button
        className={cls.loginBtn}
        onClick={openLoginModal}
      >
        Войти

      </Button>

      <LoginModal
        isOpen={loginIsOpen}
        onClose={closeLoginModal}
      />

    </header>
  );
};

export default Header;
