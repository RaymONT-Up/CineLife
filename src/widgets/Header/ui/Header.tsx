import {
  FC,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Logo from 'shared/ui/Logo';

import cls from './Header.module.scss';
import Nav from './Nav/Nav';
import HeaderProfile from './Profile/HeaderProfile';
import useHeaderFixed from '../lib/useHeaderFixed/useHeaderFixed';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className = '' } = props;

  const { isFixed } = useHeaderFixed();

  return (
    <header
      className={classNames(cls.Header, {
        [cls.fixed]: isFixed,
      }, [className, 'container'])}
    >

      <Logo className={cls.Logo} />

      <Nav className={cls.nav} />

      <HeaderProfile />
    </header>
  );
};

export default Header;
