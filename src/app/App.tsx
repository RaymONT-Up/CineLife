import { FC } from 'react';
import './styles/index.scss';

import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';
import { AppRouter } from './router';
import { useTheme } from './providers/ThemeProvider';

interface AppProps {
  className?: string;
}

const App: FC<AppProps> = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
