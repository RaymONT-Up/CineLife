import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';
import cls from './RegisterForm.module.scss';

interface RegisterFormProps {
  className?: string;
}

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { className } = props;
  return (
    <form className={classNames(cls.RegisterForm, {}, [className])}>
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
      <Input
        placeholder="Повторите пароль"
        type="password"
        className={classNames(cls.Input)}
      />
      <Button className={classNames(cls.Button)}>Создать аккаунт</Button>
    </form>
  );
};

export default RegisterForm;
