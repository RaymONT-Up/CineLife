import { FC, useEffect } from 'react';
import './styles/index.scss';

import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';

import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { useDispatch } from 'react-redux';

import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { userActions } from 'entities/User';
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

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const {
          uid,
          displayName,
          email,
          photoURL: photo,
          refreshToken: userToken,
        } = authUser;

        dispatch(userActions.setAuthData(
          {
            uid,
            displayName,
            email,
            photo,
            userToken,
          },
        ));
      }
    });
  }, [theme, dispatch]);

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
