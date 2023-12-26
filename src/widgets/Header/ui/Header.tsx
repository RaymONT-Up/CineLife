import {
  FC, useEffect,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Logo from 'shared/ui/Logo';

import useToggler from 'shared/lib/hooks/useToggler/useToggler';
import useBodyLock from 'shared/lib/hooks/useBodyLock/useBodyLock';
import cls from './Header.module.scss';
import Nav from './Nav/Nav';
import HeaderProfile from './Profile/HeaderProfile';
import useHeaderFixed from '../lib/useHeaderFixed/useHeaderFixed';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className = '' } = props;

  const { isFixed } = useHeaderFixed();
  const [isOpen, isOpenToggler] = useToggler(false);

  useBodyLock(isOpen);

  return (
    <header
      className={classNames(cls.Header, {
        [cls.fixed]: isFixed,
        [cls.open]: isOpen,
      }, [className, 'container'])}
    >

      <div className={cls.row}>
        <Logo className={cls.Logo} />
        <Burger
          isOpen={isOpen}
          onClick={isOpenToggler}
          className={cls.burger}
        />
        <Nav className={cls.nav} />
        <HeaderProfile className={cls.profile} />
      </div>
      <Menu isOpen={isOpen} />
    </header>
  );
};

export default Header;
