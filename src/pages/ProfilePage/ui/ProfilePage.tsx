import { FC } from 'react';
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
import cls from './ProfilePage.module.scss';
import FavoritesList from './FavoritesList/FavoritesList';

interface ProfilePageProps {
  className?: string;
}

// !FIX
const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const dispatch = useDispatch();

  const { isAuth, authData } = useSelector(getUserAuthData);
  // const { email } = authData;

  const navigate = useNavigate(); // Инициализация useNavigate для навигации

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

  const tabsList = [
    { name: 'Любимое', content: 'n', id: 1 },
    { name: 'В планах', content: <FavoritesList />, id: 2 },
    { name: 'Смотрю', content: 'Смотрю', id: 3 },
    { name: 'Просмотрено', content: 'Просмотрено', id: 4 },
    { name: 'Брошено', content: 'Брошено', id: 5 },
  ];

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      <Button onClick={handleSignOut}>
        {'Выйти из аккаунта '}
      </Button>

      <Tabs TabsList={tabsList} />
    </div>
  );
};

export default ProfilePage;
