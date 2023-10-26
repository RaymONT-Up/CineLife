import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Logo from 'shared/ui/Logo';
import cls from './Header.module.scss';
import Nav from './Nav/Nav';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <header className={classNames(cls.Header, {}, [className, 'container'])}>

      <Logo className={cls.Logo} />

      <Nav />

    </header>
  );
};

export default Header;
