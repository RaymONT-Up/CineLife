import { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import Button from 'shared/ui/Button';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { toggleTheme } = useTheme();

  const { className = '' } = props;

  return (
    <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      ThemeSwitcher
    </Button>
  );
};

export default ThemeSwitcher;
