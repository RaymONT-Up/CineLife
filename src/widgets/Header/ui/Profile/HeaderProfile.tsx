import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import Button from 'shared/ui/Button';
import { AuthModal } from 'features/Auth';
import AppLink from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import ProfileIcon from 'shared/assets/icons/profileIcon.svg';
import classNames from 'shared/lib/classNames/classNames';
import cls from './HeaderProfile.module.scss';

interface HeaderProfileProps {
  className?: string;
}

const HeaderProfile: FC<HeaderProfileProps> = ({ className }) => {
  const isAuth = useSelector(getIsAuth);
  const [AuthIsOpen, setAuthIsOpen] = useState<boolean>(false);

  const openAuthModal = () => {
    setAuthIsOpen(true);
  };

  const closeAuthModal = () => {
    setAuthIsOpen(false);
  };

  if (isAuth) {
    return (
      <div className={classNames(cls.HeaderProfile, {}, [className!])}>
        <AppLink to={RoutePath.profile}>
          <ProfileIcon />
        </AppLink>
        {/* <ul className={cls.list}>
          <li className={cls.item}>Избранное</li>
          <li className={cls.item}>Настройки</li>
          <li className={cls.item}>Выйти</li>
        </ul> */}
      </div>
    );
  }

  return (
    <div className={classNames(cls.HeaderProfile, {}, [className!])}>
      <Button onClick={openAuthModal}>Войти</Button>
      <AuthModal isOpen={AuthIsOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default HeaderProfile;
