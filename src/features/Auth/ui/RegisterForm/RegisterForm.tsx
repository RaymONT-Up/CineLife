import { FC, FormEvent, useCallback } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from 'features/Auth/model/slice/authSlice';
import { getAuthState } from 'features/Auth/model/selectors/getAuthState/getAuthState';
import registerByEmailAndPassword from 'features/Auth/model/services/registerByEmailAndPassword/registerByEmailAndPassword';
import cls from './RegisterForm.module.scss';

interface RegisterFormProps {
  className?: string;
}

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { className = '' } = props;

  const {
    email, password, isLoading, error,
  } = useSelector(getAuthState);
  const dispatch = useDispatch();

  const onChangeEmail = useCallback((value: string) => {
    dispatch(authActions.setEmail(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(authActions.setPassword(value));
    console.log(value);
  }, [dispatch]);

  const onSubmitLoginForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(registerByEmailAndPassword({ email, password }) as any);
  }, [dispatch, email, password]);
  return (
    <form className={classNames(cls.RegisterForm, {}, [className])} onSubmit={onSubmitLoginForm}>
      <Input
        placeholder="Email"
        type="email"
        className={classNames(cls.Input)}
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        onChange={onChangePassword}
        value={password}
        placeholder="Пароль"
        type="password"
        className={classNames(cls.Input)}
      />
      <Button type="submit" className={classNames(cls.Button)}>Создать аккаунт</Button>
    </form>
  );
};

export default RegisterForm;
