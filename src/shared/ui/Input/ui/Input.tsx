import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps {
  className?: string;
}

const Input: FC<InputProps> = (props) => {
  const { className } = props;
  return (
    <input className={classNames(cls.Input, {}, [className])} />
  );
};

export default Input;
