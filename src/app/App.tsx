import { FC, useEffect, useState } from 'react';
import './styles/index.scss';

import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';

import { AppRouter } from './router';
import { useTheme } from './providers/ThemeProvider';
import './firebase';

interface AppProps {
  className?: string;
}

const App: FC<AppProps> = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={classNames('app', {}, [])}>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
