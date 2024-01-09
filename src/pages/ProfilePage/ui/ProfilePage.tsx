import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { userActions } from 'entities/User';
import Button, { ButtonTheme } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import Favorites from './Favorites/Favorites';
import { profileActions } from '../model/slice/ProfilePageSlice';

// !FIX
const ProfilePage: FC = () => {
  const dispatch = useDispatch();

  const { isAuth, authData } = useSelector(getUserAuthData);
  const { email } = authData;

  useEffect(() => {
    return () => {
      dispatch(profileActions.reset());
    };
  });

  const navigate = useNavigate();

  // !FIX decomp to user || auth later
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      dispatch(userActions.logout());
      navigate('/');
    } catch {
      //
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
    <div>
      <Button theme={ButtonTheme.OUTLINE} onClick={handleSignOut}>
        {`Выйти из аккаунта ${email}`}
      </Button>
      <Favorites />
    </div>
  );
};

export default ProfilePage;
