import {
  FC, FormEvent, useCallback, useState,
} from 'react';
import Input from 'shared/ui/Input';
import classNames from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/Auth/model/selectors/getAuthState/getLoginState';
import { authActions } from 'features/Auth/model/slice/authSlice';
import loginByEmailAndPassword from 'features/Auth/model/services/loginByEmailAndPassword/loginByEmailAndPassword';
import Loader from 'shared/ui/Loader';
import { ThunkAction } from '@reduxjs/toolkit';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className = '' } = props;

  const dispatch = useDispatch();
  const {
    email, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeEmail = useCallback((value: string) => {
    dispatch(authActions.setEmail(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(authActions.setPassword(value));
    console.log(value);
  }, [dispatch]);

  const onSubmitLoginForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginByEmailAndPassword({ email, password }) as any);
  }, [dispatch, email, password]);

  return (
    <form className={className} onSubmit={onSubmitLoginForm}>
      {isLoading && <Loader /> }
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={onChangeEmail}
        className={classNames(cls.Input)}
      />
      <Input
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={onChangePassword}
        className={classNames(cls.Input)}
      />
      <Button
        type="submit"
        className={classNames(cls.Button)}
      >
        Войти в аккаунт
      </Button>
    </form>
  );
};
export default LoginForm;
