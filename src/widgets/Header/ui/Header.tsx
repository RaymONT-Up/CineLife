import { FC, useState } from 'react';
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
  const { className } = props;

  const [authIsOpen, setAuthIsOpen] = useState(false);

  const onCloseModal = () => {
    setAuthIsOpen(false);
  };

  const onOpenModal = () => {
    setAuthIsOpen(true);
  };

  return (
    <header className={classNames(cls.Header, {}, [className, 'container'])}>

      <Logo className={cls.Logo} />

      <Nav />

      <Button onClick={onOpenModal}>Login</Button>

      <LoginModal isOpen={authIsOpen} onClose={onCloseModal} />

    </header>
  );
};

export default Header;
