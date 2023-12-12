import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLASSIC = 'classic',
  OUTLINE = 'outline',
  GLASS_BG ='glass_bg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  centered?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ButtonTheme.CLASSIC,
    centered = false,
    ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={classNames(cls.Button, {
        [cls.centered]: centered,
      }, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
