import { FC } from 'react';
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
    <form className={cls.LoginForm}>
      <Input className={classNames(cls.Input)} />
      <Input className={classNames(cls.Input)} />
      <Button className={classNames(cls.Button)}>Test</Button>
    </form>
  );
};
export default LoginForm;
