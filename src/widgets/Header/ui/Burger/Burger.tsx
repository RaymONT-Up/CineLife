import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './Burger.module.scss';

interface BurgerProps {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

const Burger: FC<BurgerProps> = (props) => {
  const { className, isOpen = false, onClick } = props;

  return (
    <div className={classNames(cls.Burger, { [cls.open]: isOpen }, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={cls.burger}
        onClick={onClick}
      >
        <span className={cls.line1} />
        <span className={cls.line2} />
        <span className={cls.line3} />
        <span className={cls.line4} />
      </Button>
    </div>
  );
};

export default Burger;
