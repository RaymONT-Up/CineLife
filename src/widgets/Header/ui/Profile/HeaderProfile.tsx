import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import Button from 'shared/ui/Button';
import { AuthModal } from 'features/Auth';
import AppLink from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import ProfileIcon from 'shared/assets/icons/profileIcon.svg';
import cls from './HeaderProfile.module.scss';

const HeaderProfile: FC = () => {
  const isAuth = useSelector(getIsAuth);
  console.log(isAuth);
  const [AuthIsOpen, setAuthIsOpen] = useState(false);

  const openAuthModal = () => {
    setAuthIsOpen(true);
  };
  const closeAuthModal = () => {
    setAuthIsOpen(false);
  };

  if (isAuth) {
    return (
      <div className={cls.HeaderProfile}>
        <AppLink to={RoutePath.profile}>
          <ProfileIcon />
        </AppLink>
        <ul className={cls.list}>
          <li className={cls.item}>Избранное</li>
          <li className={cls.item}>Настройки</li>
          <li className={cls.item}>Выйти</li>
        </ul>
      </div>

    );
  }

  return (
    <>
      <Button
        onClick={openAuthModal}
      >
        Войти
      </Button>

      <AuthModal
        isOpen={AuthIsOpen}
        onClose={closeAuthModal}
      />

    </>

  );
};

export default HeaderProfile;
