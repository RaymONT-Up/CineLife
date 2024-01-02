import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import { AuthModal } from 'features/Auth';
import { getAuth, signOut } from 'firebase/auth';
import { userActions } from 'entities/User';
import Button from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const isAuth = useSelector(getIsAuth);

  const dispatch = useDispatch();
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
        Войтите в аккаунт
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      <Button onClick={handleSignOut}>
        Выйти из аккаунта
      </Button>
    </div>
  );
};

export default ProfilePage;
