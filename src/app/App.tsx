import { FC, useEffect, useState } from 'react';
import './styles/index.scss';

import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';

import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { UserCredential } from 'firebase/auth';
import { AppRouter } from './router';
import { useTheme } from './providers/ThemeProvider';
import { auth } from './firebase';

interface AppProps {
  className?: string;
}

const App: FC<AppProps> = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.className = theme;

    // auth.onAuthStateChanged((authUser:UserCredential) => {
    //   const user: User = {
    //     uid: authUser.user.uid,
    //     displayName: authUser.user.displayName,
    //     email: authUser.user.email,
    //     photo: authUser.user.photoURL,
    //     userToken: idToken,
    //   };
    //   console.log(authUser);
    //   if (authUser) {
    //     dispatch(userActions.setAuthData(user));
    //   }
    // });
  }, [theme]);

  return (
    <div className={classNames('app', {}, [])}>
      <Header />
      <main className={classNames('main')}>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
