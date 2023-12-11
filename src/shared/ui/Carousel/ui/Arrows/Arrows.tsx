import { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button';
import cls from './Arrows.module.scss';

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ArrowRight: FC<ArrowProps> = ({ className, ...props }) => (
  <Button theme={ButtonTheme.GLASS_BG} className={classNames(cls.ArrowRight, {}, [className, cls.arrow])} {...props}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18M18 12L13 7M18 12L13 17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Button>
);

export const ArrowLeft: FC<ArrowProps> = ({ className, ...props }) => (
  <Button theme={ButtonTheme.GLASS_BG} className={classNames(cls.ArrowLeft, {}, [className, cls.arrow])} {...props}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18M6 12L11 7M6 12L11 17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Button>
);
