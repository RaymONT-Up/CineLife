import {
  FC, useState,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Logo from 'shared/ui/Logo';

import Button from 'shared/ui/Button';
import { AuthModal } from 'features/Auth';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import cls from './Header.module.scss';
import Nav from './Nav/Nav';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className = '' } = props;

  const isAuth = useSelector(getIsAuth);

  const [AuthIsOpen, setAuthIsOpen] = useState(false);

  const openAuthModal = () => {
    setAuthIsOpen(true);
  };
  const closeAuthModal = () => {
    setAuthIsOpen(false);
  };

  return (
    <header className={classNames(cls.Header, {}, [className, 'container'])}>

      <Logo className={cls.Logo} />

      <Nav className={cls.nav} />

      {isAuth ? 'Иконка'
        : (
          <>
            <Button
              className={cls.loginBtn}
              onClick={openAuthModal}
            >
              Войти

            </Button>

            <AuthModal
              isOpen={AuthIsOpen}
              onClose={closeAuthModal}
            />

          </>
        )}

    </header>
  );
};

export default Header;
