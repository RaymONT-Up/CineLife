import React, { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import AppLink from 'shared/ui/AppLink';
import cls from './Menu.module.scss';
import { menuLinks } from './config';

interface MenuProps {
  className?: string;
  isOpen: boolean;
}

const Menu: FC<MenuProps> = (props) => {
  const { className, isOpen } = props;

  return (
    <div className={classNames(cls.Menu, { [cls.open]: isOpen }, [className])}>
      <nav className={cls.nav}>
        <ul className={cls.list}>
          {menuLinks.map((link, index) => (
            <li
              key={index}
              className={cls.item}
            >
              <AppLink className={cls.link} to={link.to}>
                {link.text}
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
