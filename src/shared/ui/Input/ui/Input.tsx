import {
  ChangeEvent, FC, InputHTMLAttributes, memo,
} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = (props) => {
  const {
    className = '',
    value = '',
    onChange,
    placeholder = '',
    type = 'text',
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type={type}
      className={classNames(cls.Input, {}, [className])}
    />
  );
};

export default Input;
