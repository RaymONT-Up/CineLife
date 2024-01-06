import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import { AuthModal } from 'features/Auth';
import { getAuth, signOut } from 'firebase/auth';
import { userActions } from 'entities/User';
import Button from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import Tabs from 'shared/ui/Tabs';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { FavoritesStatus } from 'features/favorites';
import cls from './ProfilePage.module.scss';
import FavoritesList from './Favorites/FavoritesList/FavoritesList';
import Favorites from './Favorites/Favorites';
import { profileActions } from '../model/slice/ProfilePageSlice';

interface ProfilePageProps {
  className?: string;
}

// !FIX
const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const { isAuth, authData } = useSelector(getUserAuthData);
  // const { email } = authData;

  useEffect(() => {
    return () => {
      dispatch(profileActions.reset());
    };
  });

  const navigate = useNavigate();

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      dispatch(userActions.logout());
      navigate('/');
    } catch (error) {
      console.error('Ошибка при выходе из аккаунта:', error.message);
    }
  };

  if (!isAuth) {
    return (
      <div>
        Войдите в аккаунт
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      <Button onClick={handleSignOut}>
        {'Выйти из аккаунта '}
      </Button>
      <Favorites />
    </div>
  );
};

export default ProfilePage;
