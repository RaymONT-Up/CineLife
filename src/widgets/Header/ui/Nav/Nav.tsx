import AppLink from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import cls from './Nav.module.scss';
import { navItems } from './config';

const Nav = () => (
  <nav className={cls.nav}>
    <ul className={cls.list}>

      {navItems.map((navItem) => (
        <li key={navItem.path} className={cls.item}>
          <AppLink theme={AppLinkTheme.CLEAR} to={navItem.path}>
            {navItem.text}
          </AppLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
