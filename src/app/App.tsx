import { FC, useEffect, useState } from 'react';
import './styles/index.scss';

import classNames from 'shared/lib/classNames/classNames';
import Header from 'widgets/Header/ui/Header';
import Modal from 'shared/ui/Modal';
import Button from 'shared/ui/Button';
import { AppRouter } from './router';
import { useTheme } from './providers/ThemeProvider';

interface AppProps {
  className?: string;
}

const App: FC<AppProps> = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const modalToggle = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={classNames('app', {}, [])}>
      <Modal isOpen={isOpen} onClose={modalToggle}>
        Test
      </Modal>
      <Button onClick={modalToggle}>open</Button>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
