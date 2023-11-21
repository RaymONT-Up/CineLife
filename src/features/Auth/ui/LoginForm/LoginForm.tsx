import { FC, useState } from 'react';
import Input from 'shared/ui/Input';
import classNames from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className = '' } = props;

  return (
    <form className={className}>
      <Input
        placeholder="Email"
        type="email"
        className={classNames(cls.Input)}
      />
      <Input
        placeholder="Пароль"
        type="password"
        className={classNames(cls.Input)}
      />
      <Button className={classNames(cls.Button)}>Войти в аккаунт</Button>
    </form>
  );
};
export default LoginForm;
