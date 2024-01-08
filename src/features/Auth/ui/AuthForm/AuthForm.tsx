import { FC, FormEvent, useCallback } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from 'features/Auth/model/slice/authSlice';
import { getAuthState } from 'features/Auth/model/selectors/getAuthState/getAuthState';
import registerByEmailAndPassword from 'features/Auth/model/services/registerByEmailAndPassword/registerByEmailAndPassword';
import loginByEmailAndPassword from 'features/Auth/model/services/loginByEmailAndPassword/loginByEmailAndPassword';
import cls from './AuthForm.module.scss';

interface AuthFormProps {
  className?: string;
  isLogin: boolean;
}

const AuthForm: FC<AuthFormProps> = (props) => {
  const { className = '', isLogin } = props;

  const {
    email, password,
  } = useSelector(getAuthState);

  const isValid = email.length >= 6 && password.length >= 6;

  const dispatch = useDispatch();

  const onChangeEmail = useCallback((value: string) => {
    dispatch(authActions.setEmail(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(authActions.setPassword(value));
  }, [dispatch]);

  const onSubmitLoginForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      dispatch(authActions.setError('Минимальная длина пароля и почты - 6 символов.'));
      return;
    }

    if (isLogin) {
      dispatch(loginByEmailAndPassword({ email, password }) as any);
    } else {
      dispatch(registerByEmailAndPassword({ email, password }) as any);
    }
  }, [dispatch, email, password, isLogin, isValid]);

  return (
    <form className={classNames(cls.AuthForm, {}, [className])} onSubmit={onSubmitLoginForm}>
      <Input
        placeholder="Email"
        type="email"
        className={classNames(cls.Input)}
        onChange={onChangeEmail}
        autoComplete="current-email"
        value={email}
      />
      <Input
        onChange={onChangePassword}
        value={password}
        minLength={6}
        placeholder="Пароль"
        type="password"
        className={classNames(cls.Input)}
        autoComplete="current-password"
      />
      <Button type="submit" className={classNames(cls.Button)}>
        {isLogin ? 'Войти в аккаунт' : 'Создать аккаунт'}
      </Button>
    </form>
  );
};

export default AuthForm;
